import React from "react";
import {connect} from "react-redux";
import classNames from "classnames";
import TaskInfo from "./TaskInfo";
import Services from "../components/Services";
import ServiceTasks from "../components/ServiceTasks";
import Hint from "../components/Hint";
import Textarea from "react-textarea-autosize";
import {changeDescription} from "../actions/configuratorActions";
import tasksActions from "../constants/tasksActionTypes";
import "../../assets/scss/settingsMenu.scss";


@connect(store => {
    return {
        activeConfigurator: store.tasks.activeConfigurator,
        address: store.map.address,
        taskDescription: store.configurator.taskDescription,
        taskAction: store.tasks.taskAction
    }
})
export default class Configurator extends React.Component {
    constructor(props) {
        super(props);

        this.onDescriptionTextareaFocusHandler = this.onDescriptionTextareaFocusHandler.bind(this);
        this.onDescriptionTextareaChangeHandler = this.onDescriptionTextareaChangeHandler.bind(this);
    }

    onDescriptionTextareaFocusHandler() {
        if (!this.props.taskDescription)
            this.props.dispatch(changeDescription(''));
    }

    onDescriptionTextareaChangeHandler(el) {
        this.props.dispatch(changeDescription(el.target.value));
    }

    render() {
        const {activeConfigurator, taskAction, address, taskDescription} = this.props;
        const classes = classNames('configurator', {'configurator_active': activeConfigurator});
        const taskActionLabel = taskAction === tasksActions.UPDATE_TASK ? 'Update task' : 'New task';

        return (
            <div className={classes}>
                <div className="configurator__head configurator__section">
                    <p className="configurator__label">{taskActionLabel}</p>
                    <TaskInfo/>
                </div>

                <div className="configurator__body">
                    <div className="configurator__section">
                        <p className="configurator__label">Location</p>
                        {address ? (<p>{address}</p>) : (<Hint text=''/>)}
                    </div>

                    <div className="configurator__section">
                        <p className="configurator__label">Service type</p>
                        <Services/>
                    </div>

                    <div className="configurator__section">
                        <p className="configurator__label">Plumber tasks</p>
                        <ServiceTasks/>
                    </div>

                    <div className="configurator__section">
                        <p className="configurator__label">Task description</p>
                        <Textarea
                            className="configurator__textarea"
                            value={taskDescription != null ? taskDescription : "Add task"}
                            onFocus={this.onDescriptionTextareaFocusHandler}
                            onChange={this.onDescriptionTextareaChangeHandler}
                        />
                    </div>
                </div>
            </div>
        );
    }
}