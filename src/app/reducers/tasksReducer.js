import actions from "../constants/tasksActionTypes";

const initalState = {
    activeConfigurator: false,
    data: []
};

export default function reducer(state = initalState, action) {
    switch (action.type) {
        case actions.OPEN_CONFIGURATOR: {
            return {
                ...state,
                activeConfigurator: true,
                taskAction: action.taskAction
            }
        }

        case actions.LOAD_TASKS: {
            return {...state, data: action.data}
        }

        case actions.CREATE_TASK: {
            return {
                ...state,
                data: [...state.data, action.task]
            }
        }

        case actions.EDIT_TASK: {
            return {
                ...state,
                editableTaskId: action.taskId
            }
        }

        case actions.UPDATE_TASK: {
            const index = state.data.findIndex(task => task.id === action.task.id);
            const data = [...state.data];
            data[index] = action.task;

            return {
                ...state,
                data
            }
        }

        case actions.DELETE_TASK: {
            const data = [...state.data];
            data.splice(state.data.indexOf(action.task), 1);

            return {
                ...state,
                data
            }
        }

        default:
            return state;
    }
}