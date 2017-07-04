import actions from "../constants/configuratorActionTypes";

export function changeDescription(value) {
    return {
        type: actions.CHANGE_TASK_DESCRIPTION,
        value
    }
}
