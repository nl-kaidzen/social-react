import React from 'react';
import style from './Profile.module.scss';
import MyPosts from './MyPosts/MyPosts';
import NewPostContainer from './NewPost/NewPostContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <main className={style.content}>
      <ProfileInfo 
        userData={props.userData} />
      <section>
        <NewPostContainer />
        <MyPosts posts={props.posts} />
      </section>
    </main>
  );
}

export default Profile;