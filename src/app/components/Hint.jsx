import React from "react";

import "../../assets/scss/hint.scss";


export default class Hint extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <p className='hint'>{this.props.text}</p>
        );
    }
}