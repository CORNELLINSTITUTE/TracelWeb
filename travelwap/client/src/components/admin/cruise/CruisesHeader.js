import React from 'react';
import { Link } from 'react-router-dom'

import FlatButton from 'material-ui/FlatButton';

const CruiseHeader = () => {
    return (
        <nav>
            <Link to='/adminCruise/'><FlatButton label="Cruise" secondary={true} /></Link>
            <Link to='/adminCruise/add'><FlatButton label="Add Cruise Package" secondary={true} /></Link>
        </nav>
    )
}

export default CruisesHeader;