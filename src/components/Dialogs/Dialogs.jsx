import React from 'react';
import classes from './Dialogs.module.css';
import MessageItem from "./MessageItems/MessageItems";
import Messages from "./Messages/Messages";


const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <MessageItem name={d.name} id={d.id}/>);
    let messagesElements = props.dialogsPage.messages.map(m => <Messages message={m.message}/>);

    let onChangeMessage = (e) => {
        props.onChangeMessage(e.target.value);
    }
    let sendNewMessage = () => {
        props.sendNewMessage();
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
                          value={props.dialogsPage.newMessageText}
                          placeholder={"Enter your message"} />
            </div>
            <div>
                <button onClick={sendNewMessage} >send</button>
            </div>
        </div>
    );
}

export default Dialogs;