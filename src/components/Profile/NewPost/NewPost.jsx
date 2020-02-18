import React from 'react';
import style from './NewPost.module.scss';

const NewPost = (props) => {

    let onSendButtonClick = () => {
        props.addPost();
    }

    let onTextareaValueChange = () => {
        let textareaValue = newPostElement.current.value;
        props.newPostText(textareaValue);
    }

    let newPostElement = React.createRef();

    return(
        <div className={style.wrapper}>
            <textarea name="" ref={newPostElement} className={style.textarea}></textarea>
            <button 
                className={style.button}
                onClick={onSendButtonClick}
                onChange={onTextareaValueChange}>Send</button>
        </div>
    );
}

export default NewPost;