import { connect } from 'react-redux';
import NewMessage from './NewMessage.jsx';
import { addNewDailogMessageActionCreator, updateNewMessageTextActionCreator } from '../../../state/message-reducer.js';

let mapStateToProps = (state) => {
    return {
        value: state.messagePage.newMessageText,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        updateMessageValue: (value) => {
            let textareaValue = value;
            dispatch(updateNewMessageTextActionCreator(textareaValue));
        },
        sendMessage: () => {
            dispatch(addNewDailogMessageActionCreator());
        }
    }
}

const NewMessageContainer = connect(mapStateToProps, mapDispatchToProps)(NewMessage);

export default NewMessageContainer;