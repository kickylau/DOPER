import React, { useState, useEffect, useContext } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { Modal } from "../context/Modal"
import { useParams } from 'react-router-dom';
import BookReservationModal from "./BookReservationModal";
import * as walkersActions from "../store/walker";




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

                    <h2 className="walker-name">{walker.name}</h2>
                    <h3 className="walker-summary">{walker.summary}</h3>
                    <h4 className="walker-description">{walker.description}</h4>
                    {/* <h5 className="walker-image">"Jenny G"</h5> */}
                    <h5 className="walker-location">{walker.locaiton}</h5>


                    <div>
                        {/* <button className="reserve-button" onClick={() => setShowBookModal(true)}>BOOK</button>
                        {showBookModal && ( */}

                                <BookReservationModal hideModal={() => setShowBookModal(false)} walker={walker} />

                        {/*  )} */}
                    </div>
                </div>
            ))}
        </>
    )
}


export default Walkers;
