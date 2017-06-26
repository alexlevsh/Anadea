import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import store from "./store";

import "./app.scss";

import Dashboard from "./page/Dashboard";


class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Dashboard />
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));