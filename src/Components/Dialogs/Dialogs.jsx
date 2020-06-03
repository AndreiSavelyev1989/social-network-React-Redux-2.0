import React from 'react';
import styles from "./Dialogs.module.css";
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';
import { addNewMessageCreator, updateNewMessageBodyCreator } from './../../redux/state';


const Dialogs = (props) => {

    const dialogElements = props.state.dialogs.map(d => <DialogsItem key={d.id} name={d.name} id={d.id} />)
    const messagesElements = props.state.messages.map(m => <Message key={m.id} message={m.message} id={m.id} />)
    const newMessageBody = props.state.newMessageBody;

    const sendMessage = () => {
        props.dispatch(addNewMessageCreator())
    }

    const onNewMessageBodyChange = (e) => {
        let messageBody = e.target.value;
        props.dispatch(updateNewMessageBodyCreator(messageBody))
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

                <div className={styles.newMessage}>
                    <div>
                        <textarea value={newMessageBody} onChange={onNewMessageBodyChange}></textarea>
                    </div>
                    <div>
                        <button onClick={sendMessage}>Send</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Dialogs;