import servicesActions from "../constants/servicesActionTypes";
import {changeTask} from "../actions/serviceTasksActions";
import storageManager from "../utils/storageManager";

const DATABASE_KEY = 'services';


export function loadServices() {
    return {
        type: servicesActions.LOAD_SERVICES_SUCCESS,
        data: storageManager.getData(DATABASE_KEY)
    }
}

export function selectService(activeService) {
    return function(dispatch) {
        dispatch({
            type: servicesActions.SELECT_SERVICE,
            activeService
        });

        dispatch(changeTask(null))
    }
}