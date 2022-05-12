import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Pet() {
  const [pet, setPet] = useState({});
  const { petId }  = useParams();
  console.log("PET", pet)

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
    <ul>
      <li>
        <strong>Pet Id{petId}</strong>
      </li>
      <li>
        <strong>Name{pet.name}</strong>
      </li>
    </ul>
    
  );
}
export default Pet;
