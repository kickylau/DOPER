import { useDispatch } from "react-redux";
import { removePet, loadAllPets } from '../../store/pet'
//import './DeleteTrip.css';

function DeletePetForm ({ hideModal, pet }) {
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    //similar format for edit
    e.preventDefault();
      dispatch(removePet(pet.id))
      .then(()=>{
        dispatch((loadAllPets()))
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
      <form id="delete_pet_form" onSubmit={handleSubmit}>
        <h3>Are you sure you want to delete this pet profile?</h3>
        <div id="delete_pet_buttons">
          <button id="delete" className="deleteButton" type="submit">Confirm Delete</button>
          <button id="delete" className="cancelDelete" onClick={handleCancelClick}>Cancel</button>
        </div>
      </form>
    </div>
  )
}

export default DeletePetForm;
