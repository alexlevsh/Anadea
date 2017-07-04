import React from "react";
import {connect} from "react-redux";
import {loadServices, selectService} from "../actions/servicesActions";
import Service from "../components/Service";
import Hint from "../components/Hint";

import "../../assets/scss/services.scss";


@connect(store => store.services)
export default class Services extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(loadServices());
    }

    onServiceSelect(service) {
        this.props.dispatch(selectService(service));
    }

    render() {
        const services = this.props.data;
        const activeService = this.props.activeService;

        return (
            services ? (
                <ul className="services">
                    {services.map(service => {
                        const isActive = !activeService ? false : service.id === activeService.id;
                        const icon = require(`../../assets/img/${service.icon}`);

                        return (
                            <li key={service.id} className="services__item">
                                <Service
                                    id={service.id}
                                    icon={icon}
                                    name={service.name}
                                    active={isActive}
                                    onServiceSelect={this.onServiceSelect.bind(this, service)}
                                />
                            </li>
                        );
                    })}
                </ul>
            ) : (
                <Hint text='Loading...'/>
            )
        );
    }
}