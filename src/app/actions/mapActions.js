import actions from "../constants/mapActionTypes";

export function changeLocation(location) {
    return function (dispatch) {
        const action = {
            type: actions.CHANGE_MARKER_LOCATION,
            ...location
        };

        if (!location.markerPosition) {
            dispatch(action);
        } else {
            const position = location.markerPosition;

            fetch(`http://maps.googleapis.com/maps/api/geocode/json?latlng=${position.lat},${position.lng}&sensor=true&language=en`)
                .then(response => response.json())
                .then(data => {
                    dispatch({
                        ...action,
                        address: data.results[1].formatted_address
                    });
                })
                .catch(e => {
                    dispatch({
                        ...action,
                        address: 'Undefined address.'
                    })
                })
        }
    }
}