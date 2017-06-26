import React from "react";
import Hint from "../components/Hint";
import classNames from "classnames";
import {connect} from "react-redux";
import {changeTask} from "../actions/serviceTasksActions";

import "../../assets/scss/service-tasks.scss";

@connect(store => {
    return {
        tasks: store.services.activeService
            ? store.services.activeService.tasks
            : null,
        activeTask: store.serviceTasks.activeTask
    }
})
export default class ServiceTasks extends React.Component {
    constructor(props) {
        super(props);
    }

    onSelectTaskHandler(task) {
        this.props.dispatch(changeTask(task));
    }

    render() {
        const serviceTasks = this.props.tasks;

        return (
            serviceTasks ? (
                <ul className="service-tasks">
                    {serviceTasks.map(task => {
                        const classes = classNames(
                            'service-tasks__task',
                            { 'service-tasks__task_active': !this.props.activeTask ? false : task.id === this.props.activeTask.id }
                        );

                        return (
                            <li
                                key={task.id}
                                className="service-tasks__item"
                                onClick={this.onSelectTaskHandler.bind(this, task)}
                            >
                                <span className={classes}>{task.name}</span>
                            </li>
                        );
                    })}
                </ul>
            ) : (
                <Hint text='Select any service type.' />
            )
        );
    }
}