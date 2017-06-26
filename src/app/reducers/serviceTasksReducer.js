import actions from "../constants/serviceTasksActionTypes";

export default function reducer(state = {}, action) {
    switch (action.type) {
        case actions.CHANGE_SERVICE_TASK: {
            return {
                ...state,
                activeTask: action.activeTask
            }
        }

        default: return state;
    }
}