import React from "react";
import classNames from "classnames";

import "../../assets/scss/service.scss";


export default class Service extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const classes = classNames(
            'service',
            {'service_active': this.props.active}
        );

        return (
            <div className={classes} onClick={this.props.onServiceSelect}>
                <div className="service__circle"><img className='service__icon' src={this.props.icon}
                                                      alt={this.props.name}/></div>
                <p className="service__title">{this.props.name}</p>
            </div>
        );
    }
}