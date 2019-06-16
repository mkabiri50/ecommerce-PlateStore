import React from 'react';
import classes from './PlateHeader.css';
const PlateHeader = () => {
    return (
        <div className={classes.Header}>
            <div className={classes.Plate} >
                <h1 > <ins> Plates</ins> </h1>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nulla dignissim cursus hendrerit.Donec pulvinar accumsan odio in lacinia. </p>
            </div >
        </div>

    )
}
export default PlateHeader;