import React from 'react';
import classes from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const SetActiveLinkOrNot = ({isActive}) => isActive ? `${classes.active}` : `${classes.interlocutor}`;

const MessageItem = (props) => {
    return (
        <div className={classes.gaps}>
            <NavLink to={"/dialogs/" + props.id} className={SetActiveLinkOrNot}>{props.name}</NavLink>
        </div>
    );
}

export default MessageItem;