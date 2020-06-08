import React from 'react';
import { addNewMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';


const DialogsContainer = () => {
    return (
        <StoreContext.Consumer> 
            {(store) => {

            const state = store.getState();

            const addNewMessage = () => {
                store.dispatch(addNewMessageCreator())
            }
        
            const updateNewMessageBody = (messageBody) => {
                store.dispatch(updateNewMessageBodyCreator(messageBody))
            }
        
            return  <Dialogs
                addNewMessage={addNewMessage}
                updateNewMessageBody={updateNewMessageBody}
                state={state.dialogsPage} />
        }}
           
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;