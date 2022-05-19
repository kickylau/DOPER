import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import Pet from "./Pet";
import * as petActions from "../../store/pet"
import CreatePetModal from '../CreatePetModal';


function PetPage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);
    const petsObj = useSelector(state => state.pets)
    const pets = Object.values(petsObj)


    useEffect(() => {
        if (!sessionUser) history.push('/')
        // if (sessionUser) dispatch(petActions.loadAllPets())
    }, [sessionUser])

    useEffect(() => {
        dispatch(petActions.loadAllPets())
    }, [dispatch])

    return (
        <>
            <CreatePetModal />
            <div className="page-container">
                <div className="trip-gallery">

                    {pets?.map(pet =>
                        <>
                            <Pet key={pet.id} pet={pet} /></>
                    )}
                    {/* {(pets.length === 0) &&
                        <div className="trip-container">
                            <h3 id="no-trip">Oops you dont have any pet profile now, please create one to make any reservation.</h3>
                        </div>
                    } */}
                </div>
            </div>
        </>
    );
}
export default PetPage;
