let ADD_POST = 'ADD-POST';
let UPDATE_NEW_POST_MESSAGE = 'UPDATE-NEW-POST-MESSAGE';

const initialState = {
    posts: [
        {post: "post1"},
        {post: "post2"}
    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_POST:
            let newPost = {
                post: state.newPostText
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        case UPDATE_NEW_POST_MESSAGE:
            return{
                ...state,
                newPostText: action.newMessage
            };
        default:
            return state;
    }
}


export const newPostMessageActionCreator = () => ({type: ADD_POST});
export const onPostChangeActionCreator = (newPostText) => ({
    type: UPDATE_NEW_POST_MESSAGE,
    newMessage: newPostText
});

export default profileReducer;