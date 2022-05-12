import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Pet() {
  const [pet, setPet] = useState({});
  const { petId }  = useParams();

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
        <strong>Pet Id</strong> {petId}
      </li>
      <li>
        <strong>Name</strong> {pet.name}
      </li>
    </ul>
  );
}
export default Pet;
