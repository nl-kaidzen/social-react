import React from 'react';
import style from './Post.module.scss';

const Post = (props) => {
  return (
    <div className={style.post}>
      <img className={style.post__avatar} 
          src="https://cs9.pikabu.ru/post_img/big/2017/04/12/5/1491981452114887277.jpg" 
          alt="User avatar" width="50" height="50"/>
      <div className={style.post__wrapper}>
        <h2 className={style.post__user}>{props.author}</h2>
        <p className={style.post__message}>{props.message}</p>
      </div>
    </div>
  );
}

export default Post;