let ADD_POST = 'ADD-POST';
let UPDATE_NEW_POST_MESSAGE = 'UPDATE-NEW-POST-MESSAGE';

const initialState = {
    posts: [
        {post: "post1"},
        {post: "post2"}
    ],
    newPostText: ''
}

const profileCreator = (state = initialState, action) => {
    // eslint-disable-next-line default-case
    switch (action.type){
        case ADD_POST:
            let newPost = {
                post: state.newPostText
            }
            state.posts.push(newPost);
            state.newPostText = '';
            break;
        case UPDATE_NEW_POST_MESSAGE:
            state.newPostText = action.newMessage;
            break;
    }
    return state;
}


export const newPostMessageActionCreator = () => ({type: ADD_POST});
export const onPostChangeActionCreator = (newPostText) => ({
    type: UPDATE_NEW_POST_MESSAGE,
    newMessage: newPostText
});

export default profileCreator;