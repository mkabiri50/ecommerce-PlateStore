import React from 'react';
import classes from './ToolBar.css';
import Logo from '../logo/Logo';
import Mycart from '../MyCart/Mycart';

import NavBarItems from './../NavBarItems/NavBarItems';
const toolbar = (props) => (
    <header className={classes.Toolbar}>
     
        <div className ={classes.Logo}> 
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
            <NavBarItems />
        </nav>
        <div>
            <Mycart />
        </div>
    </header>
);
export default toolbar;