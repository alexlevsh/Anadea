import actions from "../constants/servicesActionTypes";

export default function reducer(state = {}, action) {
    switch (action.type) {
        case actions.LOAD_SERVICES_SUCCESS: {
            return {
                ...state,
                data: action.data
            }
        }

        case actions.SELECT_SERVICE: {
            return {
                ...state,
                activeService: action.activeService
            }
        }

        default:
            return state;
    }
}