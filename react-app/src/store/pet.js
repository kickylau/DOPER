
const LOAD_ALL_USER_RELATED_PETS = "pet/loadAllUserRelatedPets"
const LOAD_SINGLE_PET = "pet/loadSinglePet"
const DELETE_PET = "pet/deletePet"
const LOAD_ALL_PETS = "pet/loadAllPets"

// CONSTANTS display text in actions log
/////////////////////////////////////////
// action creators
// actions are just objects

const addPet = (pet) => {
    return {
        type: LOAD_SINGLE_PET,
        payload: pet
    };
}

const loadPets = (pets) => {
    return {
        type: LOAD_ALL_USER_RELATED_PETS,
        payload: pets
    };
};


const loadAllThePets = (pets) => {
    return {
        type: LOAD_ALL_PETS,
        payload: pets
    }
}




const deletePet = (id) => {
    return {
        type: DELETE_PET,
        payload: id
    };
}

// end of actions
/////////////////////////////////////////
// thunks return a function that returns an action

export const newPet = (newPet) => async (dispatch) => {
    const { userId, name, profileImage, size, ageYear, ageMonth, hasMicrochipped, hasSpayed, hasTrained, isFriendlyWithChildren, isFriendlyWithDogs, sex, breed, description, vetInfo } = newPet
    const response = await fetch('/api/pets/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, name, profileImage, size, ageYear, ageMonth, hasMicrochipped, hasSpayed, hasTrained, isFriendlyWithChildren, isFriendlyWithDogs, sex, breed, description, vetInfo }
            )
    });

    if (response.ok) {
        const data = await response.json();
        dispatch(addPet(data))
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) return data.errors;
    } else return ['An error occurred. Please try again.']
}

export const loadAllUserRelatedPets = (petId) => async (dispatch) => {
    const res = await fetch(`/api/pets/${petId}`)
    if (res.ok) {
        const pets = await res.json();
        dispatch(loadPets(pets))
    }
}

export const loadAllPets = () => async (dispatch) => {
    const res = await fetch(`/api/pets/`)
    if (res.ok) {
        const pets = await res.json();
        dispatch(loadAllThePets(pets))
    }
}



export const editPet = (editedPet) => async (dispatch) => {
    const id = parseInt(editedPet.id, 10)
    const res = await fetch(`/api/pets/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(editedPet)
    });

    if(res.ok) {
        const pet = await res.json()
        dispatch(addPet(pet))
    }
}

export const removePet = (idString) => async (dispatch) => {
    const id = parseInt(idString, 10)
    const res = await fetch(`/api/pet/${id}`, {
        method: 'DELETE',
    })

    if(res.ok) {
        dispatch(deletePet(id))
    }
}



// end of thunks
/////////////////////////////////////////
// reducer


const initialState = {};
const petsReducer = (state = initialState, action) => {
    let newState = Object.assign({}, state)
    switch (action.type) {
        case LOAD_SINGLE_PET:
            newState[action.payload.id] = action.payload
            return newState
        case LOAD_ALL_USER_RELATED_PETS:
            newState = action.payload
            return newState
        case LOAD_ALL_PETS:
            newState = action.payload.pets
            return newState
        case DELETE_PET:
            delete newState[action.payload]
            return newState
        default:
            return state;
    }
}


export default petsReducer;
