import React, { useState, useEffect, useContext } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { Modal } from "../context/Modal"
import { useParams } from 'react-router-dom';
import BookReservationModal from "./BookReservationModal";
import * as walkersActions from "../store/walker";
import * as reservationActions from "../store/reservation";
//import woman from "./woman.png";




function Walkers() {
    const history = useHistory()
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user);
    const walkersObj = useSelector(state => state.walkers)
    const walkers = Object.values(walkersObj)

    //console.log("walker!!!", walkers)

    const [showBookModal, setShowBookModal] = useState(false)

    useEffect(() => {
        if (!sessionUser) history.push('/')
    }, [sessionUser])


    useEffect(() => {
        dispatch(walkersActions.loadAllWalkers())
    }, [dispatch])




    return (

        <>
            {walkers && walkers.map(walker => (

                <div key={walker.id} className="walker-container">
                    <div className="walker--container">

                        <div className="walker-info-container">
                            <img className="walker-image" src={walker.profileImage} width="100" height="100" />
                            <a className="walker-name">{walker.name}</a>
                        </div>
                        <div className="walker-info1-container">
                            <div className="walker-info2-container">
                                <a className="walker-summary">{walker.summary}</a>
                                <h5 className="walker-location">{walker.location}</h5>
                                <h4 className="walker-description">{walker.description}</h4>
                            </div>
                            <div className="walker-info3-container">
                                <BookReservationModal hideModal={() => setShowBookModal(false)} walker={walker} />
                            </div>
                        </div>
                    </div>
                </div>
            ))
            }
        </>
    )
}


export default Walkers;
