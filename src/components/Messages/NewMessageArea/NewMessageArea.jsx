import React from 'react';
import style from './NewMessageArea.module.scss';
import { addNewDailogMessageActionCreator, updateNewMessageTextActionCreator } from './../../../state/message-reducer.js';

const NewMessageArea = (props) => {
    let onMessageAreaChange = () => {
        let value = newMessageAreaRef.current.value;
        props.dispatch(updateNewMessageTextActionCreator(value));
    };

    let onSendButtonClick = () => {
        props.dispatch(addNewDailogMessageActionCreator());
    };

    let newMessageAreaRef = React.createRef();

    return (
        <div className={style.container}>
            <textarea 
                className={style.textarea} 
                onChange={onMessageAreaChange}
                ref={newMessageAreaRef}
                value={props.newMessageText} 
                placeholder="Enter new message"/>
            <button 
                className={style.button}
                onClick={onSendButtonClick}>Send</button>
        </div>
    );
}

export default NewMessageArea;