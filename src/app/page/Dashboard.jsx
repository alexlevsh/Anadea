import React from "react";

import Header from "../components/Header";
import Map from "../components/Map";
import TaskList from "../components/TaskList";
import Configurator from "../components/Configurator";

export default class Dashboard extends React.Component {
    render() {
        return (
            <div className="app">
                <Header/>
                <div className="content">
                    <Map/>
                    <TaskList/>
                    <Configurator/>
                </div>
            </div>
        )
    }
}