import React, { useState, useEffect, useContext } from 'react';
import { Modal } from "../../context/Modal";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { useParams } from 'react-router-dom';
import DeletePetForm from './deletePetForm';
import EditPetForm from './editPetForm';
import * as petActions from "../../store/pet";
import CreatePetModal from '../CreatePetModal';

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


  return (

    <div className="trip-container">
      <div className="gallary">
        <h3> Pet: {pet.name} </h3>
        <div className="gallary-info">
          <img src={pet.profileImage} height={200} width={200} />
          <h4>Size: {pet.size} pounds </h4>
          <h5>Age: {pet.ageYear} Year(s) {pet.ageMonth} Month(s)</h5>
          <h6> Is it microchipped? {pet.hasMicrochipped} </h6>
          <h6> Is it spayed? {pet.hasSpayed} </h6>
          <h6> Is it trained? {pet.hasTrained} </h6>
          {/* ? "True":"False" */}
          <h6> Is it friendly with children? {pet.isFriendlyWithChildren} </h6>
          <h6> Is it friendly with dogs? {pet.isFriendlyWithDogs}</h6>
          <h6> Sex: {pet.sex}</h6>
          <h6> Breed: {pet.breed}</h6>
          <h6> Description: {pet.description}</h6>
          <h6> Vet Info: {pet.vetInfo}</h6>
        </div>
      </div>
      <div>
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
    </div>
  );
}
export default Pet;
