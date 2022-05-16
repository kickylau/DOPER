import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { editReservation, loadAllUserRelatedReservations } from '../../store/reservation'
//import './EditTrip.css';

function EditReservationForm({ hideModal, reservation }) {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);
    let holder = new Date(reservation.date)
    const [taskType, setTaskType] = useState(reservation.taskType);
    const [taskLength, setTaskLength] = useState(reservation.taskLength);
    const [address, setAddress] = useState(reservation.address);
    const [comment, setComment] = useState(reservation.comment);
    const [date, setDate] = useState(holder.getFullYear()+"-"+(holder.getMonth()+1)+"-"+(holder.getDate()+1));
    //const [date, setDate] = useState(reservation.date);
    const [time, setTime] = useState(reservation.time);
    const [hasSubmitted, setHasSubmitted] = useState(false)
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        if (!sessionUser) history.push('/')
    }, [sessionUser])


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

    const submitReservationEdits = (e) => {
        e.preventDefault();
        setHasSubmitted(true)
        if (errors.length > 0) return;

        const editedReservationData = reservation
        editedReservationData.taskType = taskType
        editedReservationData.taskLength = taskLength
        editedReservationData.address = address
        editedReservationData.comment = comment
        editedReservationData.date = date
        editedReservationData.time = time

        dispatch(editReservation(editedReservationData))
            .then(() => {
                dispatch((loadAllUserRelatedReservations()))
            })
            .then(() => hideModal())
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            });
    };

    const handleCancelClick = (e) => {
        e.preventDefault()
        hideModal();
    };

    return (
        <div className="formContainer3">
            <h1> Edit An Reservation </h1>
            <form
                onSubmit={submitReservationEdits}>
                <ul className="new-reservation-errors">
                    {hasSubmitted && errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
                <div>

                    <label className='reservationlabel'>
                        Please Pick A Task Type:
                    </label>
                    <select onChange={e => setTaskType(e.target.value)} value={taskType} >
                        <option value="Dog Walking">
                            Dog Walking
                        </option>
                        <option value="Drop-In Visit">
                            Drop In Visit
                        </option>
                    </select>
                    <label className='reservationlabel'>
                        Please Pick Your Task Length:
                    </label>
                    <select onChange={e => setTaskLength(e.target.value)} value={taskLength} >
                        <option value="30 Minutes">
                            30 Minutes
                        </option>
                        <option value="60 Minutes">
                            60 Minutes
                        </option>
                    </select>
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
                    <select onChange={e => setTime(e.target.value)} value={time} >
                        <option value="6:00AM-9:00AM">
                            6:00AM-9:00AM
                        </option>
                        <option value="9:00AM-12:00PM">
                            9:00AM-12:00PM
                        </option>
                        <option value="12:00PM-3:00PM">
                            12:00AM-3:00PM
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
                    <button id="new-reservation-submit" type='submit' >Submit</button>
                    <button id="cancel" className="cancel" onClick={handleCancelClick}>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default EditReservationForm;
