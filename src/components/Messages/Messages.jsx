import React from 'react';
import style from './Messages.module.scss';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';

const Messages = (props) => {
    return(
        <div className={style.messagesWrapper}>
            <ul className={style.dialogsList}>
                <DialogItem name="Anastasia" id="1"/>
                <DialogItem name="Viktoria" id="2"/>
                <DialogItem name="Valeriy" id="3"/>
                <DialogItem name="Irina" id="4"/>
                <DialogItem name="Anastasia" id="5"/>
                <DialogItem name="Vladimir" id="6"/>
            </ul>
            <ul className={style.messagesList}>
                <MessageItem message="Hello"/>
                <MessageItem message="How are you?"/>
                <MessageItem message="I'm fine, thanks!"/>
                <MessageItem message="I am learning React. It is cool!"/>
            </ul>    
        </div>
    );
}

export default Messages;