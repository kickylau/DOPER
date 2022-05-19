import React, { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Modal } from "../../context/Modal"
import { useParams } from 'react-router-dom';
import DeleteReservationForm from "./deleteReservationForm";
import EditReservationForm from "./editReservationForm";
import * as reservationActions from "../../store/reservation";
import * as petActions from "../../store/pet";
import booking from "./booking.png";
import * as walkersActions from "../../store/walker";




function Reservation({ reservation }) {

  //const [reservation, setReservation] = useState({});
  //const { reservationId } = useParams();
  //const reservationsObj = useSelector(state => state.reservations)
  //const reservations = Object.values(reservationsObj)
  //console.log("HOW ABOUT HERE FOR ALL RESERVATIONS----", reservations)
  const history = useHistory()
  const sessionUser = useSelector(state => state.session.user);
  const petsObj = useSelector(state => state.pets);
  const pets = Object.values(petsObj)
  //console.log("IF THERE IS ANY PET HERE ----", pets)

  const walkersObj = useSelector(state => state.walkers);
  const walkers = Object.values(walkersObj)
  //const theWalker = walker[0].name

 //console.log("what is this walker format ---", walker[0]?.name)
  //console.log(reservation.walkerId)
  //console.log(walkers)
  //console.log(walkers[reservation.walkerId-1]?.name)

  const theWalker = walkers[reservation.walkerId-1]?.name





  //const { currentReservation, setCurrentReservation } = useContext(TripContext);
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!sessionUser) history.push('/')
  }, [sessionUser])


  // useEffect(() => {
  //   if (sessionUser) {
  //     dispatch(reservationActions.loadAllUserRelatedReservations());
  //     dispatch(petActions.loadAllPets());
  //   }
  // }, [sessionUser]);


  // useEffect(() => {

  // }, [reservations]);

  useEffect(() => {
    dispatch(walkersActions.loadAllWalkers())
}, [dispatch])


  const findPetName = (petId) => {
    //console.log("WHAT IS THE PETID HERE", petId)
    let pet = pets.find(pet => {
      return pet.id === petId
    })
    return pet?.name
  }

  const findPetImage = (petId) => {
    //console.log("WHAT IS THE PETID HERE", petId)
    let pet = pets.find(pet => {
      return pet.id === petId
    })
    return pet?.profileImage
  }


  //console.log("CHECK THIS OUT", findPetImage(reservation.petId))

  const thePetImage = findPetImage(reservation.petId)

//console.log("DATE FORMAT HERE ----", reservation.date)

  // const routeChange = () => {
  //   let path = "/home";
  //   history.push(path);
  // }

  return (
    <>
      
      <div className="trip-container">
        <div key={reservation.id}>
          <div className="gallary-info">
            <img src={thePetImage} height={300} width={300} />
            <h4 id="task-type">Pet Name:{findPetName(reservation.petId)}</h4>
            <h4 id="task-type">Service: {reservation.taskType}</h4>
          </div>
          <div className="gallary-info">
            <h4 id="task-length">Walker:{theWalker} </h4>
            <h4 id="task-length">Length: {reservation.taskLength}</h4>
            <h4 id="task-length">Address: {reservation.address}</h4>
            <h4 id="task-length">Comment: {reservation.comment}</h4>
            <h4 id="task-length">Date: {reservation.date.slice(0, 17)}</h4>
            <h4 id="task-length">Time: {reservation.time}</h4>
          </div>
          <div>
            <button className="button5" onClick={e => setShowEditModal(true)}>Edit Reservation</button>
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
      </div>
    </>
  )
}


export default Reservation;
