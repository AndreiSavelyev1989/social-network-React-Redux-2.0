import React from 'react';
import { addNewMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';


const DialogsContainer = (props) => {

    const state = props.store.getState();

    const addNewMessage = () => {
        props.store.dispatch(addNewMessageCreator())
    }

    const updateNewMessageBody = (messageBody) => {
        props.store.dispatch(updateNewMessageBodyCreator(messageBody))
    }

    return <Dialogs addNewMessage={addNewMessage} updateNewMessageBody={updateNewMessageBody} state={state.dialogsPage}/>
}

export default DialogsContainer;