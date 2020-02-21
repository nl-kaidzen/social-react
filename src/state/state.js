import messageReducer from "./message-reducer";
import profileReducer from "./profile-reducer";

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
            newMessageText: '',
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
        this._state.messagePage = messageReducer(this._state.messagePage, action);
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._callSubscriber(store.getState());
    }
}

export default store;