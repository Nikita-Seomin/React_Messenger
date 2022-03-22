import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const SetActiveLinkOrNot = ({isActive}) =>  isActive ? `${classes.active}` : `${classes.interlocutor}`;

const Interlocutor = (props) => {
    return(
        <div className={classes.gaps}>
        <NavLink to={"/dialogs/" + props.id} className={SetActiveLinkOrNot} >{props.name}</NavLink>
        </div>
    );
}


const Dialogs = () => {

    let dialogsData = [
        {id: 1, name: 'Dima' },
        {id: 2, name: 'Anna' }
    ]

    return (
        <div className={classes.dialogs}>
            <div className={classes.interlocutor + ' ' + classes.active}>
                <Interlocutor name={dialogsData[0].name} id={dialogsData[0].id} />
                <Interlocutor name={dialogsData[1].name} id={dialogsData[1].id} />
            </div>
        </div>
    );
}

export default Dialogs;