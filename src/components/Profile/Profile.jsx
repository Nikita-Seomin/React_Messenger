import React from 'react';
import MyPosts from './MyPosts/MyPosts';


const Profile = (props) => {
  return (
    <div>
      <div>
        < img src='https://img1.liveinternet.ru/images/attach/c/4/82/584/82584967_3749748_326441.jpg'  />
      </div>
      <div>
        ava + describe
      </div>
      <MyPosts profilePage={props.profilePage} dispatch={props.dispatch}/>
    </div>
  );
}

export default Profile;