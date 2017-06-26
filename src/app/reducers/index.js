import {combineReducers} from "redux";

import tasks from "../reducers/tasksReducer";
import services from "../reducers/servicesReducer";
import serviceTasks from "../reducers/serviceTasksReducer";
import map from "../reducers/mapReducer";
import configurator from "../reducers/configuratorReducer";

export default combineReducers({
    tasks,
    services,
    serviceTasks,
    map,
    configurator
})