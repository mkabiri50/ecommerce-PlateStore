import React from 'react';
import logo from '../../../assets/logo/logo.png';
import classes from './Logo.css';
const Logo = (props) =>(
    <div className ={classes.Logo}>
        <img src ={logo} alt = 'logo' />
    </div>
)
export default Logo