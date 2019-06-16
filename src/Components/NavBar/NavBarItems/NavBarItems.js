import React from 'react';
import classes from './NavBarItems.css';
import NavBarItem from './NavBarItem/NavBarItem';



const NavBarItems = (props) => (

        <ul className={classes.NavBarItems}>
            <NavBarItem link='/' exact={props.exact}> HOME </NavBarItem>
            <NavBarItem link='/shope' > SHOPE </NavBarItem>
            <NavBarItem link='/jurnals' > JURNALS </NavBarItem>
            <NavBarItem link='/more' > MORE </NavBarItem>
        </ul>
       


 



);
export default NavBarItems;
