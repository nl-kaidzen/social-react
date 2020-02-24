import React from 'react';
import style from './NewMessage.module.scss';

const NewMessage = (props) => {
    let onValueChange = () => {
        let value = newMessageRef.current.value;
        props.updateMessageValue(value);
    };

    let onButtonClick = () => {
        props.sendMessage();
    };

    let newMessageRef = React.createRef();

    return (
        <div className={style.container}>
            <textarea 
                className={style.textarea} 
                onChange={onValueChange}
                ref={newMessageRef}
                value={props.value} 
                placeholder="Enter new message"/>
            <button 
                className={style.button}
                onClick={onButtonClick}>Send</button>
        </div>
    );
}

export default NewMessage;