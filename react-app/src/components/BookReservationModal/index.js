import React, { useState, useEffect } from "react";
import { Modal } from "../../context/Modal";
import { useDispatch, useSelector } from 'react-redux';
import * as reservationActions from "../../store/reservation"
import { useHistory } from "react-router-dom";


function BookReservationModal() {
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);
    const walker = useSelector(state => state.walker);
    const [userId, setUserId] = useState(sessionUser?.id);
    //const [walkerId, setWalkerId] = useState(walker.id);
    const [taskType, setTaskType] = useState("");
    const [taskLength, setTaskLength] = useState("");
    const [address, setAddress] = useState("");
    const [comment, setComment] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [errors, setErrors] = useState([]);
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const [value, setValue] = useState("");


    const handleChange = () => {
        setValue(!value);
    };




    useEffect(() => {
        let errors = [];
        if (!taskType.length) errors.push("Please choose one task type.")
        if (!taskLength.length) errors.push("Please choose the task length.")
        if (!address.length) errors.push("Please enter an address.")
        if (!comment.length) errors.push("Please leave a message for the dog walker.")
        if (!date.length) errors.push("Please enter a date.")
        if (!time.length) errors.push("Please enter a time frame.")

        setErrors(errors)
    }, [taskType, taskLength, address, comment, date, time])

    const submitNewReservation = () => {
        setHasSubmitted(true)
        if (errors.length > 0) return;

        const newReservationData = {};
        setUserId(sessionUser.id)
        //setWalkerId(walker.id)
        newReservationData.userId = userId
        newReservationData.walkerId = 1
        newReservationData.taskType = taskType
        newReservationData.taskLength = taskLength
        newReservationData.address = address
        newReservationData.comment = comment
        newReservationData.date = date
        newReservationData.time = time

        dispatch(reservationActions.newReservation(newReservationData))
            .then(() => {
                setTaskType("");
                setTaskLength("");
                setAddress("");
                setComment("");
                setDate("");
                setTime("");
                setErrors([]);
                setShowModal(false)
                history.push('/Home')
                // need a .then and redirect IF you add a new trip while on another trip details page
            })
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            });
    }

    const RadioButton = ({ label, value, onChange }) => {
        return (
            <label>
                <input type="radio" checked={value} onChange={onChange} />
                {label}
            </label>
        );

    }

    return (

        <>


            <button className="BookReservationButton" onClick={() => setShowModal(true)}>
                Book a Walk
            </button>
            {
                showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        <div className="formContainer3">
                            <h1> Book A Walk </h1>
                            <form className="new-reservation-form" onSubmit={e => {
                                e.preventDefault();
                                submitNewReservation();
                            }}>
                                <ul className="new-reservation-errors">
                                    {hasSubmitted && errors.map((error, idx) => <li key={idx}>{error}</li>)}
                                </ul>
                                <label className='reservationlabel'>
                                    Please Pick A Task Type:
                                </label>
                                <div>

                                    <div className="radio">
                                        <RadioButton
                                            label="Dog Walking"
                                            value={value}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="radio">
                                        <RadioButton
                                            label="Drop In Visit"
                                            value={value}
                                            onChange={handleChange}
                                        />
                                    </div>

                                </div>
                                {/* <input onChange={e => setTaskType(e.target.value)} type="radio" className="new-task-type" placeholder='Task Type' value={taskType} /> */}
                                <label className='reservationlabel'>
                                    Please Pick Your Task Length:
                                </label>
                                <div>
                                    <div className="radio">
                                        <RadioButton
                                            label="30 Minutes"
                                            value={value}
                                            onChange={handleChange}
                                        />
                                    </div>


                                    <div className="radio">
                                        <RadioButton
                                            label="60 Minutes"
                                            value={value}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                {/* <input onChange={e => setTaskLength(e.target.value)} type="radio" className="new-task-length" placeholder='Task Length' value={taskLength} /> */}
                                <label className='reservationlabel'>
                                    Your Address:
                                </label>
                                <input onChange={e => setAddress(e.target.value)} type="text" className="new-task-address" placeholder='Address' value={address} />
                                <label className='reservationlabel'>
                                    Message for Dog Walker:
                                </label>
                                <input onChange={e => setComment(e.target.value)} type="text" className="new-task-comment" placeholder="Comment" value={comment} />
                                <label className='reservationlabel'>
                                    Please Pick A Date:
                                </label>
                                <input onChange={e => setDate(e.target.value)} type="date" className="new-task-date" value={date} />
                                <label className='reservationlabel'>
                                    Please Pick A Time Frame:
                                </label>
                                <input onChange={e => setTime(e.target.value)} type="radio" className="new-task-time" value={time} />
                                <button id="new-task-submit" type='submit' >Submit New Reservation</button>
                            </form>
                        </div>
                    </Modal >
                )
            }


        </>
    )


    // const RadioButton = ({ label, value, onChange }) => {
    //     return (
    //         <label>
    //             <input type="radio" checked={value} onChange={onChange} />
    //             {label}
    //         </label>
    //     );

    // }
};


export default BookReservationModal;
