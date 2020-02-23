import React from 'react';
import style from './NewPost.module.scss';

const NewPost = (props) => {
    let onChange = () => {
        let newValue = newPostElement.current.value;
        props.updateNewPostValue(newValue);
    };
    let onClick = () => {
        props.sendMessage()
    };

    let newPostElement = React.createRef();
    return(
        <div className={style.wrapper}>
            <textarea name="" 
                ref={newPostElement} 
                className={style.textarea}
                value={props.value}
                onChange={onChange} />
            <button 
                className={style.button}
                onClick={onClick}>Send</button>
        </div>
    );
}

export default NewPost;