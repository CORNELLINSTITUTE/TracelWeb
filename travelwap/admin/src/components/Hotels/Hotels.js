import React from 'react';
import HotelsHeader from './HotelsHeader';
import HotelsrRouter from './HotelsRouter';

const styles = {
    hotels: {
        background: '#ffffff'
    }
}

const Hotels = () => {
    return (
        <div style={styles.hotels}>
            <HotelsHeader />
            <HotelsrRouter />
        </div>
    )
}
export default Hotels;