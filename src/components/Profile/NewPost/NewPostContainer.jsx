import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from './../../../state/profile-reducer.js'
import NewPost from './NewPost.jsx';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    console.log(state.profilePage.newPostText);
    return {
        value: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostValue: (value) => {
            let textareaValue = value;
            dispatch(updateNewPostTextActionCreator(textareaValue));
        },
        sendMessage: () => {
            dispatch(addPostActionCreator());
        }
    }
}

const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost);

export default NewPostContainer