
const LOAD_ALL_WALKERS = "walker/loadAllWalkers"
const LOAD_SINGLE_WALKER = "walker/loadSingleWalker"


// CONSTANTS display text in actions log
/////////////////////////////////////////
// action creators
// actions are just objects

const addWalker = (walker) => {
    return {
        type: LOAD_SINGLE_WALKER,
        payload: walker
    };
}

const loadWalkers = (walkers) => {
    return {
        type: LOAD_ALL_WALKERS,
        payload: walkers
    };
};



// end of actions
/////////////////////////////////////////
// thunks return a function that returns an action

export const newWalker = (newWalker) => async (dispatch) => {
    const { name, summary, description, profileImage, location } = newWalker
    const response = await fetch('/api/walkers/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify( { name, summary, description, profileImage, location })
    });

    if (response.ok) {
        const data = await response.json();
        dispatch(addWalker(data))
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) return data.errors;
    } else return ['An error occurred. Please try again.']
}

export const loadAllWalkers = (walkerId) => async (dispatch) => {
    const res = await fetch(`/api/walkers/`)
    if (res.ok) {
        const walkers = await res.json();
        dispatch(loadWalkers(walkers))
    }
}



export const loadAWalker = (id) => async (dispatch) => {
    const res = await fetch(`/api/walkers/${id}`);

    if (res.ok) {
        const data = await res.json();
        if (data.errors) return data.errors
        dispatch(addWalker(data))
    }
    else return ['An error occurred. Please try again.']
}


// end of thunks
/////////////////////////////////////////
// reducer


const initialState = {};
const walkersReducer = (state = initialState, action) => {
    let newState = Object.assign({}, state)
    switch (action.type) {
        case LOAD_SINGLE_WALKER:
            newState[action.payload.id] = action.payload
            return newState
        case LOAD_ALL_WALKERS:
            newState = action.payload
            return newState
        default:
            return state;
    }
}


export default walkersReducer;
