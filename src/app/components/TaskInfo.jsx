import React from "react";
import {connect} from "react-redux";
import Button from "../components/Button";
import {createTask, updateTask} from "../actions/tasksActions";
import taskActions from "../constants/tasksActionTypes";

import "../../assets/scss/task-info.scss";


@connect(store => {
    return {
        activeService: store.services.activeService,
        activeTask: store.serviceTasks.activeTask,
        taskDescription: store.configurator.taskDescription,
        address: store.map.address,
        location: store.map.markerPosition,
        taskAction: store.tasks.taskAction,
        editableTaskId: store.tasks.editableTaskId
    }
})
export default class TaskInfo extends React.Component {
    constructor(props) {
        super(props);

        this.onTaskButtonClickHandler = this.onTaskButtonClickHandler.bind(this);
    }

    onTaskButtonClickHandler() {
        const { taskAction, editableTaskId, location, activeService, activeTask, taskDescription } = this.props;

        if (location && activeService && activeTask) {
            const action = taskAction === taskActions.UPDATE_TASK ? updateTask : createTask;

            this.props.dispatch(action({
                location,
                activeService,
                activeTask,
                taskDescription,
                id: editableTaskId
            }));
        }
    }

    render() {
        const { address, taskAction, activeService, activeTask, taskDescription, location } = this.props;
        const buttonText = taskAction === taskActions.UPDATE_TASK ? 'Update task' : 'Create task';

        return (
            <div className="task-info">
                {!location && !activeService && !activeTask ? (<p style={{marginTop: '-10px'}}></p>) : null}
                {activeService
                    ? (<p className="task-info__title">
                        I need <strong>a {activeService.name.toLowerCase()}</strong>
                        {activeTask
                            ? (<span> to <strong>{activeTask.name.toLowerCase()}</strong></span>)
                            : null
                        }
                        {taskDescription
                            ? (<span>, <strong>{taskDescription}</strong></span>)
                            : null
                        }
                    </p>)
                    : null
                }
                {address
                    ? (<address className="task-info__location">My address {address}.</address>)
                    : null
                }
                {location && activeService && activeTask
                    ? <Button
                        className='task-info__button'
                        caption={buttonText}
                        large={true}
                        onClick={this.onTaskButtonClickHandler}
                    />
                    : null
                }
            </div>
        );
    }
}