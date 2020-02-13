import React from 'react';
import style from './MessageItem.module.scss';

const MessageItem =(props) => {
    return(
        <li className={style.message}>{props.message}</li>
    );
}

export default MessageItem;