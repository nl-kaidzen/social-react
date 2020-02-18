import { renderApp } from './../render.js'

let state = {
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
        ]
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
}

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        author: 'Andrei Khabarow'
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    renderApp(state);
};

export let changeNewPostText = (postText) => {
    state.profilePage.newPostText = postText;
    renderApp(state);
    console.log(state.profilePage.newPostText)
};

export default state;