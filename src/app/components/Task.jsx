import React from "react";

import "../../assets/scss/task.scss";

import Button from "../components/Button";


export default class Task extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="task card">
                <date className="task__date">{this.props.date}</date>
                <p className="task__title">{this.props.title}</p>
                <div className="task__buttons">
                    <Button caption='Edit' className='task__button' onClick={this.props.onEditTaskHandler}/>
                    <Button caption='Delete' secondary={true} className='task__button'
                            onClick={this.props.onDeleteTaskHandler}/>
                </div>
            </div>
        );
    }
}