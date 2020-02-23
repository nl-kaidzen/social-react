import React from 'react';
import style from './Profile.module.scss';
import MyPosts from './MyPosts/MyPosts';
import NewPostContainer from './NewPost/NewPostContainer';

const Profile = (props) => {
  return (
    <main className={style.content}>
      <img src="https://lh3.googleusercontent.com/proxy/u57nJ6lJto89C-Hn2ws_Eto7mSm6GTVsUcJQHSutyeodmFyyAWWmtg3IBwPEriHUcGpk2t9E1tx_CmJDZr08lUbla-2tO0Lgd8l5vTfEbQYOAthBEDNRGrfW" className={style.heroImg} alt="background" />

      <div className={style.userInfo}>
        <div className={style.userAvatar}>
          <img src="https://static.secure.website/wscfus/8525698/4941086/urr0lhqrrlyojv0xyxwj-w885-o.jpg" alt="user avatar" 
          className={style.avatar} />
        </div>
        <div className={style.about}>
          about user
					</div>
      </div>
      <section>
        <NewPostContainer />
        <MyPosts posts={props.posts} />
      </section>
    </main>
  );
}

export default Profile;