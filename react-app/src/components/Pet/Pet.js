import React, { useState, useEffect, useContext } from 'react';
import { Modal } from "../../context/Modal";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { useParams } from 'react-router-dom';
import DeletePetForm from './deletePetForm';
import EditPetForm from './editPetForm';
import * as petActions from "../../store/pet";
import CreatePetModal from '../CreatePetModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Pet({ pet }) {
  const history = useHistory()
  const sessionUser = useSelector(state => state.session.user);
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  // const petsObj = useSelector(state => state.pets)
  // const pets = Object.values(petsObj)
  //console.log("PET", pets)

  const dispatch = useDispatch()



  useEffect(() => {
    if (!sessionUser) history.push('/')
  }, [sessionUser])

  // useEffect(() => {
  //   if (sessionUser) dispatch(petActions.loadAllPets());
  // }, [sessionUser]);


  // <div className="cardd">
  //       <div className="content">
  //         <div className="front">
  //           <img src={pet.profileImage} height={300} width={300} />
  //         </div>
  //         <div className="back">
  //           <div>
  //           <span className="backstyle"> HI</span>
  //             {/* <span className="backstyle"> {pet.breed}</span>
  //             <span className="backstyle"> {pet.sex}</span>
  //             <span className="backstyle"> {pet.size} pounds </span>
  //             <span className="backstyle"> {pet.ageYear} Year(s) {pet.ageMonth} Month(s)</span> */}
  //           </div>
  //         </div>
  //       </div>
  //     </div>

  return (
    <>


      <div className="trip-container">
        <div className="gallary">
          <div className="style" style={{ color: "grey", fontSize: "30px" }}>
            <i class="fa-solid fa-paw"> {pet.name} </i> <i class="fa-solid fa-paw"></i>
          </div>
          <div className="gallary-info">
            <img src={pet.profileImage} height={200} width={200} className="pet-image"/>
            <h4 > {pet.breed}</h4>
            <h4 > {pet.sex}</h4>
            <h4 > {pet.size} pounds </h4>
            <h4 > {pet.ageYear} Year(s) {pet.ageMonth} Month(s)</h4>
            <h5> Microchipped? {pet.hasMicrochipped} </h5>
            <h5> Sspayed? {pet.hasSpayed} </h5>
            <h5> Trained? {pet.hasTrained} </h5>
            {/* ? "True":"False" */}
            <h5> Friendly with children? {pet.isFriendlyWithChildren} </h5>
            <h5> Friendly with dogs? {pet.isFriendlyWithDogs}</h5>

            <h5> Description: {pet.description}</h5>
            <h5> Vet Info: {pet.vetInfo}</h5>
          </div>
        </div>
        <div className="gallary">
          <button id="button5" onClick={e => setShowEditModal(true)}>Edit Pet Profile </button>
          {showEditModal && (
            <Modal onClose={() => setShowEditModal(false)}>
              <EditPetForm hideModal={() => setShowEditModal(false)} pet={pet} />
            </Modal>
          )}
          <button id="button6" onClick={e => setShowDeleteModal(true)}>Delete Pet Profile</button>
          {showDeleteModal && (
            <Modal onClose={() => setShowDeleteModal(false)}>
              <DeletePetForm hideModal={() => setShowDeleteModal(false)} pet={pet} />
            </Modal>
          )}
        </div>
      </div >
    </>
  );
}
export default Pet;
