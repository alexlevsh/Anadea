import actions from "../constants/serviceTasksActionTypes";

export function changeTask(activeTask) {
    return {
        type: actions.CHANGE_SERVICE_TASK,
        activeTask
    }
}