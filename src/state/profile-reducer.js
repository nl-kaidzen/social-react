const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (message) => 
    ({ type: UPDATE_NEW_POST_TEXT, postText: message });

let initialState = {
    posts: [
        {id: 1, author: 'Julien Nguen', message: 'Hey guys concerning the functionnalities it looks ok for me, but on the integration there are some finetune that need to be done. expecially on the breadcrumb but this is not the final design so i think Andrei will finetune this a little bit later ^^'},
        {id: 2, author: 'Andrei Khabarov', message: 'React are awesome!'},
        {id: 3, author: 'Julien Nguen', message: 'Hello, this is my first post!'},
    ],
    newPostText: '',
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: 
            let newPost = {
                id: 5,
                message: state.newPostText,
                author: 'Andrei Khabarow'
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.postText;
            return state;

        default:
            return state;
    };
}

export default profileReducer;