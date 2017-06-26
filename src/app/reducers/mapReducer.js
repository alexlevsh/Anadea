import actions from "../constants/mapActionTypes";

const initalState = {
    center: { lat: 6.452708, lng: 3.389985 },
    zoom: 17,
    markerPosition: null
}

export default function reducer(state = initalState, action) {
    switch (action.type) {
        case actions.CHANGE_MARKER_LOCATION: {
            return {
                ...state,
                ...action,
                center: action.markerPosition || initalState.center,
            }
        }

        default: return state;
    }
}