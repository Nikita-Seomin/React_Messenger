import React from 'react';
import classes from './Dialogs.module.css';
import MessageItem from "./MessageItems/MessageItems";
import Messages from "./Messages/Messages";
import {onMessageActionCreator, sendMessageActionCreator} from "../../Data/Dialogs-Creator";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    let onChangeMessage = (newMessage) => {
        props.store.dispatch(onMessageActionCreator(newMessage));
    }
    let sendNewMessage = () => {
        props.store.dispatch(sendMessageActionCreator());
    }

    return <Dialogs dialogsPage={state} onChangeMessage={onChangeMessage} sendNewMessage={sendNewMessage}/>
}

export default DialogsContainer;