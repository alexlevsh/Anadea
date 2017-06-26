import React from "react";
import classNames from "classnames";

import "../../assets/scss/button.scss";


export default class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const classes = classNames(
            'button',
            this.props.className || '',
            {
                'button_secondary': this.props.secondary,
                'button_large': this.props.large
            }
        )

        return (
            <button type="button" className={classes} onClick={this.props.onClick}>{this.props.caption}</button>
        );
    }
}