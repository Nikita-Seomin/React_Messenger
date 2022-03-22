import React from 'react';

import Post from './Post/Post';

const MyPosts = () =>{
    return(
        <div>
        my post
        <div>
          <textarea placeholder="input your post"></textarea>
          <button>Add post</button>
        </div>
        <div>
          <Post post='Hi' />
        </div>
      </div>
    );
}

export default MyPosts;