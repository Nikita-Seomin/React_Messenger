let ADD_POST = 'ADD-POST';
let SET_PROFILE = 'SET-PROFILE';
let UPDATE_NEW_POST_MESSAGE = 'UPDATE-NEW-POST-MESSAGE';

const initialState = {
    posts: [
        {post: "post1"},
        {post: "post2"}
    ],
    newPostText: '',
    profile: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
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
            return {
                ...state,
                newPostText: action.newPostText
            };
        case SET_PROFILE:
            return {
                ...state,
                profile: action.profile

            };
        default:
            return state;
    }
}


export const addPost = () => ({type: ADD_POST});
export const onPostChange = (newPostText) => ({type: UPDATE_NEW_POST_MESSAGE, newPostText});
export const setProfile = (profile) => ({type: SET_PROFILE, profile});

export default profileReducer;