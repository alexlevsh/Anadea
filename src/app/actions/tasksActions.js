import actions from "../constants/tasksActionTypes";
import {selectService} from "../actions/servicesActions";
import {changeTask} from "../actions/serviceTasksActions";
import {changeDescription} from "../actions/configuratorActions";
import {changeLocation} from "../actions/mapActions";
import storageManager from "../utils/storageManager";
import getHashCode from "../utils/getHashcode";

const DATABASE_KEY = 'tasks';

const clearData = (dispatch) => {
    dispatch(selectService(null));
    dispatch(changeDescription(null));
    dispatch(changeLocation({markerPosition: null, address: null}));
    dispatch({
        type: actions.EDIT_TASK,
        taskId: null
    });
}

const transformTaskData = (data) => {
    const date = new Date().getTime();

    return {
        id: data.id || getHashCode(date + ''),
        date,
        service: data.activeService,
        serviceTask: data.activeTask,
        location: data.location,
        description: data.taskDescription || null
    }
}


export function loadTasks() {
    return {
        type: actions.LOAD_TASKS,
        data: storageManager.getData(DATABASE_KEY)
    }
}

export function openConfiguratorForCreate() {
    return function (dispatch) {
        clearData(dispatch);

        dispatch({
            type: actions.OPEN_CONFIGURATOR,
            taskAction: actions.CREATE_TASK
        })
    }
}

export function openConfiguratorForUpdate() {
    return {
        type: actions.OPEN_CONFIGURATOR,
        taskAction: actions.UPDATE_TASK
    }
}

export function createTask(data) {
    return function (dispatch) {
        const task = transformTaskData(data);

        dispatch({
            type: actions.CREATE_TASK,
            task
        });

        clearData(dispatch);

        storageManager.addItem(DATABASE_KEY, task);
    }
}

export function editTask(task) {
    return function (dispatch) {
        dispatch(openConfiguratorForUpdate());
        dispatch(selectService(task.service));
        dispatch(changeTask(task.serviceTask));
        dispatch(changeDescription(task.description));
        dispatch(changeLocation({
            markerPosition: task.location,
            address: task.address,
            center: task.location
        }));
        dispatch({
            type: actions.EDIT_TASK,
            taskId: task.id
        });
    }
}

export function updateTask(data) {
    return function (dispatch) {
        const task = transformTaskData(data);

        dispatch({
            type: actions.UPDATE_TASK,
            task
        });

        dispatch(openConfiguratorForCreate());

        storageManager.updateItem(DATABASE_KEY, task);
    }
}

export function deleteTask(task) {
    return function (dispatch) {
        dispatch({
            type: actions.DELETE_TASK,
            task
        });

        storageManager.deleteItem(DATABASE_KEY, task);
    }
}