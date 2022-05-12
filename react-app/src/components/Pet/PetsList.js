import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function PetsList() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/pets/');
      const responseData = await response.json();
      setPets(responseData.pets);
    }
    fetchData();
  }, []);

  const petComponents = pets.map((pet) => {
    return (
      <li key={pet.id}>
        <NavLink to={`/pets/${pet.id}`}>{pet.name}</NavLink>
      </li>
    );
  });

  return (
    <>
      <h1>Pet List: </h1>
      <ul>{petComponents}</ul>
    </>
  );
}

export default PetsList;
