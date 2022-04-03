import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (<div>
            <div className={classes.item}>
                <img src='https://avatars.mds.yandex.net/get-pdb/2855558/c8de63bb-3bde-4225-85f8-caee3bc1abef/s1200?webp=false'/>
                {props.post}
            </div>
            <div>
            <span>
                like
            </span>
            </div>
        </div>
    );
}

export default Post;