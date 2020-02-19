import React from 'react';
import style from './NewPost.module.scss';

const NewPost = (props) => {
    let onSendButtonClick = () => {
        props.dispatch({type: 'ADD-POST'});
    }

    let onTextareaValueChange = () => {
        let textareaValue = newPostElement.current.value;
        props.dispatch({
            type: 'UPDATE-NEW-POST-TEXT',
            postText: textareaValue,
        });
    }

    let newPostElement = React.createRef();

    return(
        <div className={style.wrapper}>
            <textarea name="" 
                ref={newPostElement} 
                className={style.textarea}
                value={props.postValue}
                onChange={onTextareaValueChange} />
            <button 
                className={style.button}
                onClick={onSendButtonClick}>Send</button>
        </div>
    );
}

export default NewPost;