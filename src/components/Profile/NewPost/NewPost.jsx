import React from 'react';
import style from './NewPost.module.scss';
import { addPostActionCreator, updateNewPostTextActionCreator } from './../../../state/profile-reducer.js'

const NewPost = (props) => {
    let onSendButtonClick = () => {
        props.dispatch(addPostActionCreator());
    }

    let onTextareaValueChange = () => {
        let textareaValue = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(textareaValue));
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