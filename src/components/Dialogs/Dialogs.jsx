import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const SetActiveLinkOrNot = ({isActive}) => isActive ? `${classes.active}` : `${classes.interlocutor}`;

const Interlocutor = (props) => {
    return (
        <div className={classes.gaps}>
            <NavLink to={"/dialogs/" + props.id} className={SetActiveLinkOrNot}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div>
            {props.message}
        </div>
    );
}


const Dialogs = () => {

    let dialogs = [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Anna'}
    ]
    let messages = [
        {message: 'hi'},
        {message: 'hi, hi'}
    ]

    let dialogsElements = dialogs.map(d => <Interlocutor name={d.name} id={d.id}/>);
    let messagesElements = messages.map(m => <Message message={m.message}/>);

    return (
        <div className={classes.dialogs}>
            <div>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;