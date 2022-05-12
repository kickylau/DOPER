import React, { useState, useEffect } from 'react';
import { Modal } from "../../context/Modal";

import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { useParams } from 'react-router-dom';
import * as petActions from "../../store/pet";

function Pet() {
  const [pet, setPet] = useState({});
  const { petId } = useParams();

  const petsObj = useSelector(state => state.pets)
  const pets = Object.values(petsObj)
  //console.log("PET", pets)

  const dispatch = useDispatch()

  // const showPets = () => {
  //   const allPets = {}


  //   dispatch(petActions.loadAllPets(allPets))



  // }


  useEffect(()=>{
    (async()=>{
      await dispatch(petActions.loadAllPets());
    })();

  }, [dispatch]);



  useEffect(() => {
    if (!petId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/pets/${petId}`);
      const pet = await response.json();
      setPet(pet);
      //console.log(pet)
    })();
  }, [petId]);

  if (!pet) {
    return null;
  }

  return (
    <>
    {pets?.map(pet => (
    <>

     <h3> Name: {pet.name} </h3>
     {/* <h3>{pet.profileImage}</h3> */}
     <h4>Size: {pet.size} pounds </h4>
     <h5>Age: {pet.ageYear} Years {pet.ageMonth} Months</h5>
     <h6> Is it microchipped? {pet.hasMicrochipped} </h6>
     <h6> Is it spayed? {pet.hasSpayed} </h6>
     <h6> Is it friendly with children? {pet.isFriendlyWithChildren} </h6>
     <h6> Is it friendly with dogs? {pet.isFriendlyWithDogs}</h6>
     <h6> Sex: {pet.sex}</h6>
     <h6> Breed: {pet.breed}</h6>
     <h6> Description: {pet.description}</h6>
     <h6> Vet Info: {pet.vetInfo}</h6>
     </>
    ))}


    </>

  );
}
export default Pet;
