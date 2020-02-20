import React from 'react';
import style from './NewMessageArea.module.scss';
import { addNewDailogMessageActionCreator, updateNewMessageTextActionCreator } from './../../../state/state.js';

const NewMessageArea = (props) => {
    let onMessageAreaChange = () => {
        let value = newMessageAreaRef.current.value;
        console.log(value);
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
                cols="30" 
                rows="10"
                onChange={onMessageAreaChange}
                ref={newMessageAreaRef}
                value={props.newMessageText} />
            <button 
                className={style.button}
                onClick={onSendButtonClick}>Send</button>
        </div>
    );
}

export default NewMessageArea;