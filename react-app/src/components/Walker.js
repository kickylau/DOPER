import React, { useState, useEffect, useContext } from "react";
import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { Modal } from "../context/Modal"
import { useParams } from 'react-router-dom';
import BookReservationModal from "./BookReservationModal";



function Walkers() {
    const history = useHistory()
    const sessionUser = useSelector(state => state.session.user);
    //const {id} = useParams()


    // const [walker, setWalker] = useState({});
    // const { walkerId } = useParams();
    const walkers = useSelector(state => state.walker)
    console.log("walker", walkers)
    //const walker = walkers.find(walkerObj => walkerObj.id === +id)

    const [showBookModal, setShowBookModal] = useState(false)

    useEffect(() => {
        if (!sessionUser) history.push('/')
    }, [sessionUser])

   //console.log(currentWalker);


    return (
        <>
        <div className="walker-container">

            <h2 className="walker-name">HEY</h2>
            <h3 className="walker-summary">"HI"</h3>
            <h4 className="walker-description">"Jenny G"</h4>
            <h5 className="walker-image">"Jenny G"</h5>
            <h5 className="walker-location">"Jenny G"</h5>


            <div>
                <button className="reserve-button" onClick={e => setShowBookModal(!showBookModal)}>BOOK</button>
                {showBookModal && (
                    <Modal onClose={() => setShowBookModal(false)}>
                        <BookReservationModal hideModal={() => setShowBookModal(false)} walkers={walkers} />
                    </Modal>
                )}
            </div>
        </div>
        <div className="walker-container">
            <h2 className="walker-name">Jenny G</h2>
            <h3 className="walker-summary">"HI"</h3>
            <h4 className="walker-description">"Jenny G"</h4>
            <h5 className="walker-image">"Jenny G"</h5>
            <h5 className="walker-location">"Jenny G"</h5>


            <div>
                <button className="reserve-button" onClick={e => setShowBookModal(!showBookModal)}>BOOK</button>
                {showBookModal && (
                    <Modal onClose={() => setShowBookModal(false)}>
                        <BookReservationModal hideModal={() => setShowBookModal(false)} walkers={walkers} />
                    </Modal>
                )}
            </div>
        </div>
</>
    )
}


export default Walkers;
