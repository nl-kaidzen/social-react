const ADD_NEW_DIALOG_MESSAGE = 'ADD-NEW-DIALOG-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const messageReducer = (state, action) => {
    switch (action.type) {
        case ADD_NEW_DIALOG_MESSAGE: 
            let newMessage = {
                id: 7,
                message: state.newMessageText,
            }
            state.messageData.push(newMessage);
            return state;

        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.message;
            return state;
            
        default:
            return state;
    }
}

export const addNewDailogMessageActionCreator = () => ({ type: ADD_NEW_DIALOG_MESSAGE });
export const updateNewMessageTextActionCreator = (message) => ({ type: UPDATE_NEW_MESSAGE_TEXT, message: message });

export default messageReducer;