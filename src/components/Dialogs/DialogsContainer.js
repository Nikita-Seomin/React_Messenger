import {onMessageActionCreator, sendMessageActionCreator} from "../../Data/DialogsReducer";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onChangeMessage:  (newMessage) => {
            dispatch(onMessageActionCreator(newMessage));
        },
        sendNewMessage: () => {
            dispatch(sendMessageActionCreator());
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;