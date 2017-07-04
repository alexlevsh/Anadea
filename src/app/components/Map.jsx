import React from "react";
import {GoogleMap, Marker, withGoogleMap} from "react-google-maps";
import {connect} from "react-redux";
import {changeLocation} from "../actions/mapActions";

import "../../assets/scss/map.scss";

import markerIcon from "../../assets/img/marker.svg";


@connect(store => store.map)
export default class Map extends React.Component {
    constructor(props) {
        super(props);
    }

    onClickHandler(e) {
        const markerPosition = {lat: e.latLng.lat(), lng: e.latLng.lng()}
        const center = this.map.getCenter();

        this.setState({
            center: {lat: center.lat(), lng: center.lng()},
            zoom: this.map.getZoom()
        });

        this.props.dispatch(changeLocation({
            markerPosition
        }));
    }

    render() {
        const mapOptions = {
            mapTypeControl: false,
            panControl: false,
            streetViewControl: false,
            zoomControl: false
        };

        const center = this.state ? this.state.center || this.props.center : this.props.center;
        const zoom = this.state ? this.state.zoom || this.props.zoom : this.props.zoom;

        const ServiceMap = withGoogleMap(props => (
            <GoogleMap
                ref={map => this.map = map}
                defaultZoom={zoom}
                defaultCenter={center}
                onClick={props.onMapClick}
                options={mapOptions}
            >
                { this.props.markerPosition ? <Marker icon={markerIcon} position={this.props.markerPosition}/> : null }
            </GoogleMap>
        ));

        return (
            <ServiceMap
                containerElement={<div className='map'/>}
                mapElement={<div className='map__container'/>}
                onMapClick={this.onClickHandler.bind(this)}
            />
        );
    }
}