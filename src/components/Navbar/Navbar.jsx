import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const SetActiveLink = ({isActive}) =>  isActive ? `${classes.activeLink}` : ``;

const Navbar = () => {
    return (
      <nav className={classes.nav}>
      <div className={classes.item}>
        <NavLink to="/profiles" className={SetActiveLink}>Profiles</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/dialogs" className={SetActiveLink} >Messages</NavLink>
      </div>
      <div className={classes.item}>
        <a>News</a>
      </div>
      <div className={classes.item}>
        <a>Music</a>
      </div>
      <div className={classes.item}>
        <a>Settings</a>
      </div>
    </nav>
    );
}

export default Navbar;