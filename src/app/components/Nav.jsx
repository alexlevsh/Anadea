import React from "react";

import "../../assets/scss/nav.scss";

export default class Nav extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="nav">
                <a className="nav__link nav__link_active" href="#">Dashboard</a>
                <a className="nav__link" href="#">History</a>
                <a className="nav__link nav__link_last" href="#">Profile</a>
            </nav>
        );
    }
}