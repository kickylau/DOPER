import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as petActions from "../store/pet";
import { useDispatch, useSelector } from 'react-redux';



function User() {
  const [user, setUser] = useState({});
  const petsObj = useSelector(state => state.pets)
  const pets = Object.values(petsObj)
  const [pet, setPet] = useState({})
  const { userId } = useParams();
  const { petId } = useParams();
  const dispatch = useDispatch()

  console.log("DO WE HAVE PET HERE", pets)

  useEffect(() => {
    if (!userId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      //const response2 = await fetch(`/api/pets/${petId}`)
      const user = await response.json();
      //const pet = await response2.json();
      //dispatch(petActions.loadAllPets());


      setUser(user);
      setPet(pet);


    })();
  }, [userId]);

  if (!user) {
    return null;
  }


  return (
    <>
      <ul>
        <li>
          <strong>User Id???</strong> {userId}
        </li>
        <li>
          <strong>Username</strong> {user.username}
        </li>
        <li>
          <strong>Email??</strong> {user.email}
        </li>
        <li>
          <strong>Pet</strong>
        </li>
      </ul>
      <p>Pet</p>

      {/* <div>
        {pets && pets.map(pet => { pet.name }
        )}
      </div> */}
    </>
  );
}
export default User;
