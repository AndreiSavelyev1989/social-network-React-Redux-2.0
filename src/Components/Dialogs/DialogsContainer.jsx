import React from 'react';
import { addNewMessage, updateNewMessageBody } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}


const DialogsContainer = connect(mapStateToProps, {addNewMessage, updateNewMessageBody})(Dialogs)

export default DialogsContainer;