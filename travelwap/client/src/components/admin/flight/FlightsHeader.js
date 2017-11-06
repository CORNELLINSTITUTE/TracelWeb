import React from 'react';
import { Link } from 'react-router-dom'

import FlatButton from 'material-ui/FlatButton';

const FlightHeader = () => {
    return (
        <nav>
            <Link to='/adminFlight/'><FlatButton label="Flights" secondary={true} /></Link>
            <Link to='/adminFlight/add'><FlatButton label="Add Flight Package" secondary={true} /></Link>
        </nav>
    )
}

export default FlightHeader;