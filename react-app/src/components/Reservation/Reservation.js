import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import Reservation from "./index";
import * as reservationActions from "../../store/reservation"
import BookReservationModal from '../BookReservationModal';
import booking from "./booking.png";



function ReservationPage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);
    const reservationsObj = useSelector(state => state.reservations)
    const reservations = Object.values(reservationsObj)


    useEffect(() => {
        if (!sessionUser) history.push('/')
        // if (sessionUser) dispatch(reservationActions.loadAllUserRelatedReservations())
    }, [sessionUser])

    useEffect(() => {
        dispatch(reservationActions.loadAllUserRelatedReservations())
    }, [dispatch])

    const routeChange = () => {
        let path = "/home";
        history.push(path);
      }

    return (
        <>
            <BookReservationModal />
            <div className="page-container">
                <div className="trip-gallery">

                    {reservations?.map(reservation =>
                        <Reservation key={reservation.id} reservation={reservation} />
                    )}
                    {(reservations.length === 0) &&
                        <div className="trip-container">
                            <h3 id="no-trip">Oops You have no current available reservations</h3>
                            <img src={booking} alt="Booking" className="icon-booking" />
                            <button onClick={routeChange}> Make a reservation now!</button>
                        </div>
                    }
                </div>
            </div>
        </>
    );
}
export default ReservationPage;
