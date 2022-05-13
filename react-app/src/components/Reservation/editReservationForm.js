import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { editReservation } from '../../store/reservation'
//import './EditTrip.css';

function EditReservationForm({ hideModal, reservation }) {
    const dispatch = useDispatch();
    const [taskType, setTaskType] = useState(reservation.taskType);
    const [taskLength, setTaskLength] = useState(reservation.setTaskLength);
    const [address, setAddress] = useState(reservation.address);
    const [comment, setComment] = useState(reservation.comment);
    const [date, setDate] = useState(reservation.date);
    const [time, setTime] = useState(reservation.time);
    const [errors, setErrors] = useState([]);
    const [hasSubmitted, setHasSubmitted] = useState(false)

    useEffect(() => {
        let errors = [];
        if (!taskType) errors.push("Please choose one task type.")
        if (!taskLength) errors.push("Please choose the task length.")
        if (!address) errors.push("Please enter an address.")
        if (!comment) errors.push("Please leave a message for the dog walker.")
        if (!date) errors.push("Please enter a date.")
        if (!time) errors.push("Please enter a time frame.")

        setErrors(errors)
    }, [taskType, taskLength, address, comment, date, time])

    const submitReservationEdits = () => {
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
            <form
                onSubmit={e => {
                    e.preventDefault();
                    submitReservationEdits();
                }}>
                <ul className="new-reservation-errors">
                    {hasSubmitted && errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
                <div>

                    <label className='reservationlabel'>
                        Please Pick A Task Type:
                    </label>
                    {/* <button onClick={onClick}>Will open Select</button> */}
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
                            6-9am
                        </option>
                        <option value="9:00AM-12:00PM">
                            9-12
                        </option>
                        <option value="12:00AM-3:00PM">
                            12-3
                        </option>
                        <option value="3:00PM-6:00PM">
                            3-6
                        </option>
                        <option value="6:00PM-9:00PM">
                            6-9
                        </option>
                        <option value="9:00PM-12:00AM">
                            9pm-12
                        </option>
                    </select>
                    <button id="new-task-submit" type='submit' >Submit</button>
                </div>
            </form>
        </div>
    )
}

export default EditReservationForm;
