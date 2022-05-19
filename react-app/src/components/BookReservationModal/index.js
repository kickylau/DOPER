import React, { useState, useEffect } from "react";
import { Modal } from "../../context/Modal";
import { useDispatch, useSelector } from 'react-redux';
import * as reservationActions from "../../store/reservation"
import { useHistory, useParams } from "react-router-dom";
import * as petActions from "../../store/pet";
import DatePicker from 'react-date-picker';
import "./BookReservation.css"




function BookReservationModal({ walker }) {
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);
    const [userId, setUserId] = useState(sessionUser?.id);
    const [walkerId, setWalkerId] = useState(walker?.id);
    const petsObj = useSelector(state => state.pets)
    const pets = Object.values(petsObj)
    //console.log("TRY OUT THIS PET ID ----", pets[0]?.id)
    const [petId, setPetId] = useState(pets[0]?.id);
    const [taskType, setTaskType] = useState("Dog Walking");
    const [taskLength, setTaskLength] = useState("30 Minutes");
    const [address, setAddress] = useState("");
    const [comment, setComment] = useState("");
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState("6:00AM-9:00AM");
    const [errors, setErrors] = useState([]);
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const [petName, setPetName] = useState(pets[0]?.name);
    //console.log("PET FIRST NAME IS HERE-------", pets[0]?.name)
    const [loaded, setLoaded] = useState(false);




    // const yesterday = moment().subtract(1, 'day');
    // const disablePastDt = current => {
    //   return current.isAfter(yesterday);
    // };


    const updatePet = e => {
        setPetName(e.target.value);
        setPetId(e.target.value);


        console.log("check the value here in pet reserevation ----", e.target.value)
    }


    useEffect(() => {
        if (sessionUser) {
            dispatch(petActions.loadAllPets());
        }
    }, [sessionUser]);


    useEffect(() => {
        let petsObj = { ...pets }
        let array = [];
        Object.keys(petsObj).forEach((key) => {
            let pet = petsObj[key]
            array.push(pet)
        })
        setLoaded(true)
    }, [])


    // useEffect(() => {
    //     let errors = [];
    //     if (!taskType.length) errors.push("Please choose one task type.")
    //     if (!taskLength.length) errors.push("Please choose the task length.")
    //     if (!address.length) errors.push("Please enter an address.")
    //     if (!comment.length) errors.push("Please leave a message for the dog walker.")
    //     if (!date.length) errors.push("Please enter a date.")
    //     if (!time.length) errors.push("Please enter a time frame.")

    //     setErrors(errors)
    // }, [taskType, taskLength, address, comment, date, time])



    const submitNewReservation = (e) => {
         e.preventDefault();
         setHasSubmitted(true)

        //if (errors.length > 0) return;

        const newReservationData = {};
        setUserId(sessionUser.id)
        setWalkerId(walker.id)
        newReservationData.userId = userId
        newReservationData.petId = petId
        newReservationData.walkerId = walkerId
        newReservationData.taskType = taskType
        newReservationData.taskLength = taskLength
        newReservationData.address = address
        newReservationData.comment = comment
        newReservationData.date = date
        newReservationData.time = time
        newReservationData.petName = petName
        //console.log("NEW RESERVATION DATA -----", newReservationData)

        dispatch(reservationActions.newReservation(newReservationData))
            .then((res) => {
                if (res) setErrors(res)
                else {
                    setShowModal(false);
                    setErrors([]);
                    setTaskType("Dog Walking");
                    setTaskLength("30 Minutes");
                    setAddress("");
                    setComment("");
                    setDate("");
                    setTime("6:00AM-9:00AM");
                    setPetName(pets[0]?.name)
                    history.push('/reservations')
                }
            })
        // .catch(async (res) => {
        //     const data = await res.json();
        //     if (data && data.errors) setErrors(data.errors);
        // });
    }


    if (!loaded) return null


    return (

        <>

            <button className="BookReservationButton" onClick={() => setShowModal(true)}>
                Book a walk now!
            </button>
            {
                showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        <div className="formContainer">
                            <h1> Book A Walk </h1>

                            <form className="form" onSubmit={submitNewReservation}>
                                <ul className="new-reservation-errors">
                                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                                    {/* {hasSubmitted && errors.map((error, idx) => <li key={idx}>{error}</li>)} */}
                                </ul>
                                <div>
                                    <label className='label'>
                                        Please Pick A Task Type:
                                    </label>
                                    <select onChange={e => setTaskType(e.target.value)} className="option" value={taskType} >
                                        <option value="Dog Walking">
                                            Dog Walking
                                        </option>
                                        <option value="Drop-In Visit">
                                            Drop In Visit
                                        </option>
                                    </select>
                                    <label className='label'>
                                        Please Pick Your Task Length:
                                    </label>
                                    <select onChange={e => setTaskLength(e.target.value)} className="option" value={taskLength} >
                                        <option value="30 Minutes">
                                            30 Minutes
                                        </option>
                                        <option value="60 Minutes">
                                            60 Minutes
                                        </option>
                                    </select>
                                    <label className='label'>
                                        Your Address:
                                    </label>
                                    <input onChange={e => setAddress(e.target.value)} type="text" className="input" placeholder='Address' value={address} />
                                    <label className='label'>
                                        Message For Dog Walker:
                                    </label>
                                    <input onChange={e => setComment(e.target.value)} type="text" className="input" placeholder="Comment" value={comment} />
                                    <label className='label'>
                                        Please Pick A Date:
                                    </label>
                                    <DatePicker selected={date} value={date} minDate={new Date()} onChange={e => setDate(new Date(e))}/>
                                    {/* <input onChange={e => setDate(e.target.value)} minDate={new Date()} type="date" className="input" value={date} /> */}
                                    <label className='label'>
                                        Please Pick A Time Frame:
                                    </label>
                                    <select onChange={e => setTime(e.target.value)} className="option" value={time} >
                                        <option value="6:00AM-9:00AM">
                                            6:00AM-9:00AM
                                        </option>
                                        <option value="9:00AM-12:00PM">
                                            9:00AM-12:00PM
                                        </option>
                                        <option value="12:00PM-3:00PM">
                                            12:00PM-3:00PM
                                        </option>
                                        <option value="3:00PM-6:00PM">
                                            3:00PM-6:00PM
                                        </option>
                                        <option value="6:00PM-9:00PM">
                                            6:00PM-9:00PM
                                        </option>
                                        <option value="9:00PM-12:00AM">
                                            9:00PM-12:00AM
                                        </option>
                                    </select>
                                    <label className='label'>
                                        Please Pick A Pet:
                                    </label>
                                    <select onChange={updatePet} className="option" value={petsObj[petId]?.name} >
                                        {
                                            pets?.map(pet => {
                                                return (
                                                    <option key={pet.id} value={pet.id}>{pet.name}</option>
                                                )
                                            })
                                        }
                                    </select>
                                    <button id="loginButton" type='submit' >Submit</button>
                                </div>
                            </form>
                        </div>
                    </Modal >
                )
            }


        </>
    )

};


export default BookReservationModal;
