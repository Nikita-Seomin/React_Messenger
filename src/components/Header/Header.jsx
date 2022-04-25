import React from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";


const Header = (props) => {
    return (<header className={classes.header}>
            <img src='https://img1.liveinternet.ru/images/attach/c/4/82/584/82584967_3749748_326441.jpg'/>
            <div className={classes.login}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}

            </div>
        </header>
    );
}

export default Header;