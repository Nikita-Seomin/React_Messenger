let ADD_MESSAGE = 'ADD-MESSAGE';
let UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const initialState = {
    dialogs: [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Anna'}
    ],

    messages: [
        {message: 'hi'},
        {message: 'hi, hi'}
    ],
    newMessageText: ''
}

const dialogsCreator = (state=initialState, action) => {
    if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
        state.newMessageText = action.newMessageText;
    } else if (action.type === ADD_MESSAGE) {
        let newMessage = {
            message: state.newMessageText
        }
        state.messages.push(newMessage);
        state.newMessageText = '';
    }
    return state;
}

export const sendMessageActionCreator = () => ({type: ADD_MESSAGE});
export const onMessageActionCreator = (newMessageText) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newMessageText: newMessageText
});

export default dialogsCreator;