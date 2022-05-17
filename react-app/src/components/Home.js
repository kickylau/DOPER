import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import Walkers from "./Walker";
import BookReservationModal from './BookReservationModal';
import * as reservationActions from "../store/reservation"
import * as petsActions from "../store/pet";
import CreatePetModal from "./CreatePetModal";
import * as walkersActions from "../store/walker";

function Home() {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);
    const walkersObj = useSelector(state => state.walkers)
    const walkers = Object.values(walkersObj)
    //console.log("WHERE IS THE WALKERS??", walkers)

    useEffect(() => {
        if (!sessionUser) history.push('/')
        //if (sessionUser) dispatch(reservationActions.loadAllUserRelatedReservations(sessionUser.id))
    }, [sessionUser])

    useEffect(() => {
        // (async()=>{
        if (sessionUser)
        dispatch(reservationActions.loadAllUserRelatedReservations());
        dispatch(walkersActions.loadAllWalkers());
        // })();
      }, [sessionUser]);


        return (
            <div className="page-container">
                <div className="walkers-gallery">
                        <Walkers/>
                </div>
            </div>
        );
    }



export default Home;
