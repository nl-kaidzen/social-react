import React from 'react';
import style from './Messages.module.scss';

const Messages = (props) => {
    return(
        <div className={style.messagesWrapper}>
            <ul className={style.dialogsList}>
                <li className={style.dialogsItem}>
                    Anastasia
                </li>
                <li className={style.dialogsItem}>Viktoria</li>
                <li className={style.dialogsItem}>Valeriy</li>
                <li className={style.dialogsItem}>Irina</li>
                <li className={style.dialogsItem}>Vladimi</li>
            </ul>
            <ul className={style.messagesList}>
                <li className={style.message}>Hello</li>
                <li className={style.message}>How are you?</li>
                <li className={style.message}>I'm fine, thanks!</li>
                <li className={style.message}>I am learning React. It is cool!</li>
            </ul>    
        </div>
    );
}

export default Messages;