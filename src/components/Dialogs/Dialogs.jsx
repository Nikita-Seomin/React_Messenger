import React from 'react';
import classes from './Dialogs.module.css';
import MessageItem from "./MessageItems/MessageItems";
import Messages from "./Messages/Messages";
import {onMessageActionCreator, sendMessageActionCreator} from "../../Data/Dialogs-Creator";


const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;
    let dialogsElements = state.dialogs.map(d => <MessageItem name={d.name} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Messages message={m.message}/>);

    let onChangeMessage = (e) => {
        debugger;
        props.store.dispatch(onMessageActionCreator(e.target.value));
    }
    let sendNewMessage = () => {
        props.store.dispatch(sendMessageActionCreator());
    }

    return (
        <div className={classes.dialogs}>
            <div>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea onChange={onChangeMessage}
                          value={state.newMessageText}
                          placeholder={"Enter your message"} />
            </div>
            <div>
                <button onClick={sendNewMessage} >send</button>
            </div>
        </div>
    );
}

export default Dialogs;