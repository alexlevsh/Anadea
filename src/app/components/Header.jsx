import React from "react";

import "../../assets/scss/header.scss";

import Nav from "../components/Nav";


export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header className="header">
                <a className="header__logo" href="index.html">JobUp</a>
                <Nav/>
            </header>
        );
    }
}