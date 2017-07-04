import React from "react";
import {connect} from "react-redux";
import {deleteTask, editTask, loadTasks, openConfiguratorForCreate} from "../actions/tasksActions";
import Task from "../components/Task";
import formatDate from "../utils/formatDate";

import "../../assets/scss/task-list.scss";
import "../../assets/scss/card.scss";


@connect(store => store.tasks)
export default class TaskList extends React.Component {
    constructor(props) {
        super(props);

        this.onNewTaskHandler = this.onNewTaskHandler.bind(this);
    }

    onNewTaskHandler() {
        this.props.dispatch(openConfiguratorForCreate());
    }

    onEditTaskHandler(task) {
        this.props.dispatch(editTask(task));
    }

    onDeleteTaskHandler(task) {
        this.props.dispatch(deleteTask(task));
    }

    componentDidMount() {
        this.props.dispatch(loadTasks());
    }

    render() {
        const tasks = this.props.data;

        return (
            <div className="task-list">
                <button type="button" className="task-list__button card" onClick={this.onNewTaskHandler}>+ New task
                </button>

                <ul className="task-list__list">
                    {tasks.map(task => {
                        const description = task.description ? `, ${task.description}` : '';
                        const title = `I need a ${task.service.name.toLowerCase()} to ${task.serviceTask.name.toLowerCase()}${description}`

                        return (
                            <li key={task.id} className="task-list__item">
                                <Task
                                    id={task.id}
                                    date={formatDate(task.date)}
                                    title={title}
                                    onEditTaskHandler={this.onEditTaskHandler.bind(this, task)}
                                    onDeleteTaskHandler={this.onDeleteTaskHandler.bind(this, task)}
                                />
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}