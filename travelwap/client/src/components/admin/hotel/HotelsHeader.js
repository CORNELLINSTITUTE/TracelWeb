import React from 'react';
import { Link } from 'react-router-dom'

import FlatButton from 'material-ui/FlatButton';

const HotelHeader = () => {
    return (
        <nav>
            <Link to='/adminHotel/'><FlatButton label="Hotels" secondary={true} /></Link>
            <Link to='/adminHotel/add'><FlatButton label="Add Hotel Package" secondary={true} /></Link>
        </nav>
    )
}

export default HotelHeader;