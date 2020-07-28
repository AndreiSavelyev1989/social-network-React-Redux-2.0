import React from 'react';
import styles from "./Dialogs.module.css";
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';
import { Redirect } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import { required, maxLengthCreator } from '../../utils/validators/validators';
import { Element } from './../common/FormControls/FormControls';


const Dialogs = (props) => {

    const dialogElements = props.dialogsPage.dialogs.map(d => <DialogsItem key={d.id} name={d.name} id={d.id} />)
    const messagesElements = props.dialogsPage.messages.map(m => <Message key={m.id} message={m.message} id={m.id} />)


    const sendNewMessage = (values) => {
        props.addNewMessage(values.newMessageBody)
    }

    return (
        <div className={styles.backgroundImg}>

            <div className={styles.dialogsContainer}>

                <div className={styles.dialogs}>
                    {dialogElements}
                </div>

                <div className={styles.messages}>
                    {messagesElements}
                </div>

                <AddNewMessageReduxForm onSubmit={sendNewMessage}/>

            </div>
        </div>
    )
}

const maxLength = maxLengthCreator(50);
const Textarea = Element('textarea');

const AddNewMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={styles.newMessage}>
            <div>
                <Field placeholder='Enter new message!!!' 
                validate={[required, maxLength]}
                name='newMessageBody' component={Textarea} />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddNewMessageReduxForm = reduxForm({ form: 'newMessageBody' })(AddNewMessageForm)

export default Dialogs;