import { useDispatch } from "react-redux";
import { deleteReservation, loadAllUserRelatedReservations } from '../../store/reservation'
import './Reservation.css';

function DeleteReservationForm ({ hideModal, reservation }) {
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    //similar format for edit
    e.preventDefault();
      dispatch(deleteReservation(reservation.id))
      //console.log("CHECK ID HERE ------", reservation.id)
      .then(()=>{
        dispatch((loadAllUserRelatedReservations()))
      })
      .then(()=>{
         hideModal()
      })

  }
  const handleCancelClick = (e) => {
    e.preventDefault()
    hideModal();
  };

  return (
    <div className="formContainer6">
      <form id="delete_reservation_form" onSubmit={handleSubmit}>
        <h3>Are you sure you want to delete this reservation?</h3>
        <div id="delete_reservation_buttons">
          <button id="delete" className="deleteButton" type="submit">Confirm Delete</button>
          <button id="delete" className="cancelDelete" onClick={handleCancelClick}>Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default DeleteReservationForm;
