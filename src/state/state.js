const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_NEW_DIALOG_MESSAGE = 'ADD-NEW-DIALOG-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
    _state: { 
        messagePage: {
            dialogsData: [
                {id:1, name: 'Anastasia'},
                {id:2, name: 'Viktoria'},
                {id:3, name: 'Valeriy'},
                {id:4, name: 'Irina'},
                {id:5, name: 'Anastasia'},
                {id:6, name: 'Vladimir'}
            ],
            messageData: [
                {id:1, message: 'Hello'},
                {id:2, message: 'How are you?'},
                {id:3, message: 'I\'m fine, thanks!'},
                {id:4, message: 'I am learning React. It is cool!'},
            ],
            newMessageText: '123',
        },
        profilePage: {
            posts: [
                {id: 1, author: 'Julien Nguen', message: 'Hey guys concerning the functionnalities it looks ok for me, but on the integration there are some finetune that need to be done. expecially on the breadcrumb but this is not the final design so i think Andrei will finetune this a little bit later ^^'},
                {id: 2, author: 'Andrei Khabarov', message: 'React are awesome!'},
                {id: 3, author: 'Julien Nguen', message: 'Hello, this is my first post!'},
            ],
            newPostText: '',
        },
        sidebar: {
            friends: ['Anastasia', 'Vladimir', 'Igor'],
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('State was updated');
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                author: 'Andrei Khabarow'
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        }
        if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.postText;
            this._callSubscriber(this._state);
        }
        if (action.type === 'ADD-NEW-DIALOG-MESSAGE') {
            let newMessage = {
                id: 7,
                message: this._state.messagePage.newMessageText,
            }
            this._state.messagePage.messageData.push(newMessage);
            this._callSubscriber(this._state);
        }
        if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.messagePage.newMessageText = action.message;
            console.log('catch');
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST });

export const addNewDailogMessageActionCreator = () => ({ type: ADD_NEW_DIALOG_MESSAGE })

export const updateNewPostTextActionCreator = (message) => 
    ({ type: UPDATE_NEW_POST_TEXT, postText: message });

export const updateNewMessageTextActionCreator = (message) => {
    let action = { type: UPDATE_NEW_MESSAGE_TEXT, message: message };
    console.log(action, message);
    return action;   
}
    

export default store;