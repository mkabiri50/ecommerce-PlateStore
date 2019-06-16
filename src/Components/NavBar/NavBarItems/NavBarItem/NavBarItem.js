import React  from 'react';
import classes from './NavBarItem.css';
import {NavLink} from 'react-router-dom';
const NavBarItem =(props) =>(
   <li className={classes.NavBarItem}> 
       <NavLink 
        to ={props.link} 
        exact
        activeClassName={classes.active}>
      {props.children }</NavLink>
   </li>
);
export default NavBarItem;  