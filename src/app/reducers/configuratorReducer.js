import actions from "../constants/configuratorActionTypes";

export default function reducer(state = {}, action) {
    switch (action.type) {
        case actions.CHANGE_TASK_DESCRIPTION: {
            return {
                ...state,
                taskDescription: action.value
            }
        }

        default:
            return state;
    }
};
