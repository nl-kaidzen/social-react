import React from 'react';
import style from './Messages.module.scss';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';

const Messages = (props) => {
    let dialogElements = props.dialogs.map((dialog) => {
        return <DialogItem name={dialog.name} id={dialog.id} />
    });

    let messageElements = props.messages.map((message) => {
        return <MessageItem message={message.message}/>
    });

    return(
        <div className={style.messagesWrapper}>
            <ul className={style.dialogsList}>
                {dialogElements}
            </ul>
            <ul className={style.messagesList}>
                {messageElements}
            </ul>    
        </div>
    );
}

export default Messages;