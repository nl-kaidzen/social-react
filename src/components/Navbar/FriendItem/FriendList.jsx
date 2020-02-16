import React from 'react';
import style from './FriendItem.module.scss';

const FriendItem = (props) => {
    return(
        <li className={style.friendListItem}>
            <div className={style.avatar}></div>
            <p className={style.name}>{props.name}</p>
        </li>
    );
}

export default FriendItem;