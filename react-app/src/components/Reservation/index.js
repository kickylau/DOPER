import React, { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Modal } from "../../context/Modal"
import { useParams } from 'react-router-dom';
//import { TripContext } from '../../context/Trip';
import DeleteReservationForm from "./deleteReservationForm";
import EditReservationForm from "./editReservationForm";
import * as reservationActions from "../../store/reservation";

//import "./TripCard.css";


function Reservation() {

  //const [reservation, setReservation] = useState({});
  const { reservationId } = useParams();
  const reservationsObj = useSelector(state => state.reservations)
  const reservations = Object.values(reservationsObj)
  //console.log("HOW ABOUT HERE FOR ALL RESERVATIONS----", reservations)
  const history = useHistory()
  const sessionUser = useSelector(state => state.session.user);


  //const { currentReservation, setCurrentReservation } = useContext(TripContext);
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!sessionUser) history.push('/')
  }, [sessionUser])


  useEffect(() => {
    // (async()=>{
    if (sessionUser) dispatch(reservationActions.loadAllUserRelatedReservations());
    // })();
  }, [sessionUser]);


  // useEffect(() => {
  //   setReservation(Object.values(reservationsObj))
  // }, [reservationsObj])



  // useEffect(() => {
  //   if (!reservationId) {
  //     return;
  //   }
  //   (async () => {
  //     const response = await fetch(`/api/reservations/${reservationId}`);
  //     const reservation = await response.json();
  //     setReservation(reservation);

  //   })();
  // }, [reservationId]);


  // if (!reservation) {
  //   return null;
  // }


  return (
    <>
      <h1> All Reservations </h1>

      {reservations?.map(reservation =>

        <>
          <div className="reservation-container">
            <h2 id="task-type">{reservation.taskType}</h2>
            <h3 id="task-length">{reservation.taskLength}</h3>
            <h3 id="task-length">{reservation.address}</h3>
            <h3 id="task-length">{reservation.comment}</h3>
            <h3 id="task-length">{reservation.date}</h3>
            <h3 id="task-length">{reservation.time}</h3>

            <div>
              <button className="button5" onClick={e => setShowEditModal(!showEditModal)}>Edit Reservation</button>
              {showEditModal && (
                <Modal onClose={() => setShowEditModal(false)}>
                  <EditReservationForm hideModal={() => setShowEditModal(false)} reservation={reservation} />
                </Modal>
              )}
              <button className="button6" onClick={e => setShowDeleteModal(true)}>Cancel Reservation</button>
              {showDeleteModal && (
                <Modal onClose={() => setShowDeleteModal(false)}>
                  <DeleteReservationForm hideModal={() => setShowDeleteModal(false)} reservation={reservation} />
                </Modal>
              )}
            </div>
          </div>
        </>
      )
      }
    </>
  )
}


export default Reservation;
