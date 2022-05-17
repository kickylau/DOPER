import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as petActions from "../store/pet";
import { useDispatch, useSelector } from 'react-redux';



function User() {
  const [user, setUser] = useState({});
  const [pet, setPet] = useState({})
  const { userId } = useParams();
  const { petId } = useParams();
  const dispatch = useDispatch()

  console.log("DO WE HAVE PET HERE", pet)

  useEffect(() => {
    if (!userId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const response2 = await fetch(`/api/pets/${petId}`)
      const user = await response.json();
      const pet = await response2.json();
      dispatch(petActions.loadAllPets());


      setUser(user);
      setPet(pet);


    })();
  }, [userId, petId]);

  if (!user) {
    return null;
  }





  return (
    <ul>
      <li>
        <strong>User Id</strong> {userId}
      </li>
      <li>
        <strong>Username</strong> {user.username}
      </li>
      <li>
        <strong>Email</strong> {user.email}
      </li>
      <li>
        <strong>Pet</strong> {pet.name}
      </li>

    </ul>
  );
}
export default User;
