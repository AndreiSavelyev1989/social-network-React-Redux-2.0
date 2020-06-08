import React from 'react';
import { addNewMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNewMessage: () => {dispatch(addNewMessageCreator())},
        updateNewMessageBody: (messageBody) => {dispatch(updateNewMessageBodyCreator(messageBody))}
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;