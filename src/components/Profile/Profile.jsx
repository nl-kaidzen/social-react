import React from 'react';
import style from './Profile.module.scss';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
    <main className={style.content}>
      <img src="https://lh3.googleusercontent.com/proxy/u57nJ6lJto89C-Hn2ws_Eto7mSm6GTVsUcJQHSutyeodmFyyAWWmtg3IBwPEriHUcGpk2t9E1tx_CmJDZr08lUbla-2tO0Lgd8l5vTfEbQYOAthBEDNRGrfW" className={style.hero__img} alt="background" />

      <div className={style.user__info}>
        <div className={style.user__avatar}>
          <img src="https://static.secure.website/wscfus/8525698/4941086/urr0lhqrrlyojv0xyxwj-w885-o.jpg" alt="user avatar" 
          className={style.avatar} />
        </div>
        <div className={style.about}>
          about user
					</div>
      </div>
      <section>
        <div>New post</div>
        <MyPosts />
      </section>
    </main>
  );
}

export default Profile;