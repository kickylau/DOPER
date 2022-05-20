const LOAD_ALL_USER_RELATED_RESERVATIONS = "reservation/loadAllUserRelatedReservations"
const LOAD_SINGLE_RESERVATION = "reservation/loadSingleReservation"
const DELETE_RESERVATION = "reservation/deleteReservation"
const EDIT_RESERVATION = "reservation/editReservation"


// CONSTANTS display text in actions log
/////////////////////////////////////////
// action creators
// actions are just objects

const addReservation = (reservation) => {
    return {
        type: LOAD_SINGLE_RESERVATION,
        payload: reservation
    };
}

const loadReservations = (reservations) => {
    return {
        type: LOAD_ALL_USER_RELATED_RESERVATIONS,
        payload: reservations
    };
};

const deleteReservationAction = (id) => {
    return {
        type: DELETE_RESERVATION,
        payload: id
    };
}

const updateReservation = (reservation) => {
    return {
        type:EDIT_RESERVATION,
        payload:reservation
    }
}

// end of actions
/////////////////////////////////////////
// thunks return a function that returns an action

export const newReservation = (newReservation) => async (dispatch) => {
    const { userId, walkerId, taskType, taskLength, address, comment, date, time, petId } = newReservation
    //console.log("DOES IT GOT AN PET ID ??", petId)
    //console.log("NEW RESERVATION HERE ", newReservation)
    const response = await fetch('/api/reservations/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, walkerId, taskType, taskLength, address, comment, date, time, petId })


    });
    //console.log("NEW RESERVATION!!!", response)

    if (response.ok) {
        const data = await response.json();
        dispatch(addReservation(data))
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) return data.errors;
    } else return ['An error occurred. Please try again.']
}

export const loadAllUserRelatedReservations = () => async (dispatch) => {
    const res = await fetch(`/api/reservations/`)
    //console.log("IT RUN THROUGH HERE -------", res)
    if (res.ok) {
        const reservations = await res.json();
        //console.log("HOW ABOUT HERE -------", reservations)
         dispatch(loadReservations(reservations))
    }
}



export const editReservation = (editedReservation) => async (dispatch) => {
    const { userId, walkerId, taskType, taskLength, address, comment, date, time, petId } = editedReservation
    const id = parseInt(editedReservation.id, 10)
    //console.log("SO WHAT IS THIS EDIT RESERVAITON ID HERE ", id )
    const res = await fetch(`/api/reservations/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, walkerId, taskType, taskLength, address, comment, date, time, petId })
    });

    if (res.ok) {

        const reservation = await res.json()
        //console.log("RESSSSSS",reservation)
        dispatch(updateReservation(reservation))
        return null;
    } else if (res.status < 500) {
        const data = await res.json()
        if (data.errors) {
            return data.errors
        }
    }
    else return ["errors: failed"]
}

export const deleteReservation = (id) => async (dispatch) => {
    //const id = parseInt(idString, 10)
    //console.log("SO WHAT IS THIS CANCEL RESERVAITON ID HERE ", id )

    const res = await fetch(`/api/reservations/${id}`, {
        method: 'DELETE',
    })

    if (res.ok) {
        //console.log("\n\n\n\n\n\n\n DISPATCH THE REDUCER HERE V------------\n\n\n\n\n"  )
        await dispatch(deleteReservationAction(id))
    }
}




// end of thunks
/////////////////////////////////////////
// reducer


const initialState = {};
const reservationsReducer = (state = initialState, action) => {
    //let newState = Object.assign({}, state)
    let newState;
    switch (action.type) {
        case LOAD_SINGLE_RESERVATION:
            newState = {...state}
            newState[action.payload.id] = action.payload
            return newState
        case LOAD_ALL_USER_RELATED_RESERVATIONS:
            newState={}
            //console.log("RESERVATION STATE", newState)
            //console.log("\n\n\n HELLO FROM YOUR LOADING RESERVATIONS \n\n\n")
            action.payload.reservations.map(reservation=>(

                newState[reservation.id]=reservation
            ))
            //console.log("THIS IS THE NEW STAE----",newState)
            return newState
        case EDIT_RESERVATION:
            newState = {...state}
            newState[action.payload.id] = action.payload
            return newState
        case DELETE_RESERVATION:
            //console.log("THIS IS THE DELETE REDUCER --------", action.payload)
            newState={...state}
            delete newState[action.payload]
            return { ...newState }
        default:
            return state;
    }
}


export default reservationsReducer;
