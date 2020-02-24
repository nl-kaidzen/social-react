const ADD_NEW_DIALOG_MESSAGE = 'ADD-NEW-DIALOG-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
};

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_DIALOG_MESSAGE: {
            return {
                ...state,
                messageData: [...state.messageData, {id: 7, message: state.newMessageText}],
                newMessageText: '',
            };
        }

        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText: action.message,
            };
        }       

        default:
            return state;
    }
}

export const addNewDailogMessageActionCreator = () => ({ type: ADD_NEW_DIALOG_MESSAGE });
export const updateNewMessageTextActionCreator = (message) => ({ type: UPDATE_NEW_MESSAGE_TEXT, message: message });

export default messageReducer;