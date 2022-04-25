import React from 'react';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileAva from "./ProfileAva/PropfileAva";


const Profile = (props) => {
    return (
        <div>
            <ProfileAva profile={props.profile}/>
            <MyPostsContainer profielPage={props.profilePage}/>
        </div>
    );
}

export default Profile;