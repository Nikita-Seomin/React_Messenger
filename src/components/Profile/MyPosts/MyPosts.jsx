import React from 'react';
import Post from './Post/Post';


const MyPosts = (props) => {

    let postsElements = props.profilePage.posts.map(p => <Post post={p.post}/>)
    let newPostText = React.createRef();

    const addPost = () => {
        props.addPost()
    }
    
    const onPostChange = () => {
        props.onPostChange(newPostText.current.value);
    }

    return (
        <div>
            <div>
                <textarea onChange={onPostChange}
                          ref={newPostText}
                          value={props.profilePage.newPostText}
                          placeholder="input your post"/>
                <button onClick={addPost}>Add post</button>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;