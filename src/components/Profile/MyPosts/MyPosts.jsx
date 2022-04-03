import React from 'react';

import Post from './Post/Post';

const MyPosts = () => {

    let posts = [
        {post: "post1"},
        {post: "post2"}
    ]

    let postsElements = posts.map(p => <Post post={p.post}/>)

    return (
        <div>
            my post
            <div>
                <textarea placeholder="input your post"></textarea>
                <button>Add post</button>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;