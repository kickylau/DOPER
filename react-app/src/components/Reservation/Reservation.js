import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import Reservation from "./index";
import * as reservationActions from "../../store/reservation";
import * as petActions from "../../store/pet";
import BookReservationModal from '../BookReservationModal';
import booking from "./booking.png";



function ReservationPage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);
    const reservationsObj = useSelector(state => state.reservations)
    const petsObj = useSelector(state => state.pets)
    const pets = Object.values(petsObj)
    //console.log("WHAT FORMAT FOR PET HERE =-----", pets)
    const reservations = Object.values(reservationsObj)



    useEffect(() => {
        if (!sessionUser) history.push('/')
        // if (sessionUser) dispatch(reservationActions.loadAllUserRelatedReservations())
    }, [sessionUser])

    useEffect(() => {
        dispatch(reservationActions.loadAllUserRelatedReservations())
        //console.log("CHECK OUT THE RESERVATION HERE -----", reservations)
    }, [dispatch, petsObj])


   useEffect(()=>{
    //console.log("CHECK OUT THE RESERVATION HERE 2 -----", reservations)
    //console.log("CHECK OUT THE RESERVATION HERE 3 -----", petsObj)

   },[reservations,petsObj])

    const routeChange = () => {
        let path = "/home";
        history.push(path);
    }


    //   {this.state.activities
    //     .sort(
    //       (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    //     )
    //     .map((activity, i) => (
    //       <Activity
    //         key={i}
    //         data={activity}
    //         handleDelete={this.handleDelete}
    //       />
    //     ))}

    return (
        <>
            <div className="page-container">
                <div className="trip-gallery">

                    {reservations?.sort(
                        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
                    )
                        .map(reservation =>
                            <Reservation key={reservation.id} reservation={reservation} />
                        )}
                    {(reservations.length === 0) &&
                        <div className="trip-container">
                            <h3 id="no-trip">Oops you have no current available reservations</h3>
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
