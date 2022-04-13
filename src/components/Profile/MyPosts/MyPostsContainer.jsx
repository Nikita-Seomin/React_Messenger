import React from 'react';
import {newPostMessageActionCreator, onPostChangeActionCreator} from "../../../Data/Profile-Creator";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {
    let state = props.store.getState();

    const addPost = () => {
        props.store.dispatch(newPostMessageActionCreator());
    }
    
    const onPostChange = (newPostText) => {
        props.store.dispatch(onPostChangeActionCreator(newPostText));
    }

    return <MyPosts onPostChange={onPostChange}
                    addPost={addPost}
                    profilePage={state.profilePage}/>
}

export default MyPostsContainer;