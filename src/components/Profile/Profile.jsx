import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';


const Profile = () => {
  return (
    <div>
      <div>
        < img src='https://img1.liveinternet.ru/images/attach/c/4/82/584/82584967_3749748_326441.jpg' />
      </div>
      <div>
        ava + discr
      </div>
      <MyPosts />
    </div>
  );
}

export default Profile;