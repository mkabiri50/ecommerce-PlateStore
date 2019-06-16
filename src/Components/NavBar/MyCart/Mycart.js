import React from 'react';
import classes from './Mycart.css'
const Mycart =(props)=>{
    return(
        <p className={classes.Mycart}>
            MY CART{props.purchase}
        </p>
    )
}
export default Mycart;