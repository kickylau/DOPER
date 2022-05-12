import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import Walkers from "./Walker";
import BookReservationModal from './BookReservationModal';
import * as reservationActions from "../store/reservation"
import * as petsActions from "../store/pet"

function Home() {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);
    const walkersObj = useSelector(state => state.walkers)
    const walkers = Object.values(walkersObj)
    const pet = useSelector(state => state.pet);
    const [invitedPetReservations, setinvitedPetReservations] = useState();

    useEffect(() => {
        if (!sessionUser) history.push('/')
             if (sessionUser) dispatch(petsActions.loadAllUserRelatedPets(pet.id))
        // }, [sessionUser])

        return (
            <div className="page-container">
                <h1 className="all-walkers"> All Walkers !!!!!</h1>
                <div className="walkers-gallery">

                    {walkers && walkers.map(walker =>
                        <Walkers key={walker.id} walker={walker} />
                    )}
                </div>
                <BookReservationModal/>
            </div>
        );
    }
    )
}

export default Home;
