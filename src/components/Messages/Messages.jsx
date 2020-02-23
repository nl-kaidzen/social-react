import React from 'react';
import style from './Messages.module.scss';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
import NewMessageContainer from './NewMessageArea/NewMessageContainer';

const Messages = (props) => {
    let dialogElements = props.dialogs.map((dialog) => {
        return <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />
    });

    let messageElements = props.messages.map((message) => {
        return <MessageItem message={message.message} key={message.id}/>
    });

    return(
        <div className={style.messagesWrapper}>
            <ul className={style.dialogsList}>
                {dialogElements}
            </ul>
            <div className={style.messageContainer}>
                <ul className={style.messagesList}>
                    {messageElements}
                </ul>
                <NewMessageContainer />
            </div>
        </div>
    );
}

export default Messages;