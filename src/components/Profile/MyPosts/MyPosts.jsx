import React from 'react';
import Post from './Post/Post';
import {newPostMessageActionCreator, onPostChangeActionCreator} from "../../../Data/Profile-Creator";


const MyPosts = (props) => {

    let postsElements = props.profilePage.posts.map(p => <Post post={p.post}/>)
    let newPostText = React.createRef();

    const newPostMessage = () => {
        props.dispatch(newPostMessageActionCreator());
    }
    
    const onPostChange = () => {
        props.dispatch(onPostChangeActionCreator(newPostText.current.value));
    }

    return (
        <div>
            my post
            <div>
                <textarea onChange={onPostChange}
                          ref={newPostText}
                          value={props.profilePage.newPostText}
                          placeholder="input your post"/>
                <button onClick={newPostMessage}>Add post</button>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;