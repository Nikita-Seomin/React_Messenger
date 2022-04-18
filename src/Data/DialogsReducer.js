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

const dialogsReducer = (state=initialState, action) => {
    switch (action.type){
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newMessageText
            }
        case ADD_MESSAGE:
            let newMessage = {
                message: state.newMessageText
            }
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageText: ''
            }
        default:
            return state;
    }
}

export const sendMessageActionCreator = () => ({type: ADD_MESSAGE});
export const onMessageActionCreator = (newMessageText) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newMessageText: newMessageText
});

export default dialogsReducer;