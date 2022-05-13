import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import Walkers from "./Walker";
import BookReservationModal from './BookReservationModal';
import * as reservationActions from "../store/reservation"
import * as petsActions from "../store/pet";
import CreatePetModal from "./CreatePetModal";

function Home() {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);
    const walkersObj = useSelector(state => state.walkers)
    const walkers = Object.values(walkersObj)

    useEffect(() => {
        if (!sessionUser) history.push('/')
        //if (sessionUser) dispatch(reservationActions.loadAllUserRelatedReservations(sessionUser.id))
    }, [sessionUser])

    useEffect(() => {
        // (async()=>{
        if (sessionUser) dispatch(reservationActions.loadAllUserRelatedReservations());
        // })();
      }, [sessionUser]);

      
        return (
            <div className="page-container">
                <h1 className="all-walkers"> All Walkers !!!!!</h1>
                <div className="walkers-gallery">

                    {walkers && walkers.map(walker =>
                        <Walkers key={walker.id} walker={walker} />
                    )}
                </div>
                <BookReservationModal/>
                <CreatePetModal/>
            </div>
        );
    }



export default Home;
