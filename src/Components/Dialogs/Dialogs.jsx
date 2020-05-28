import React from 'react';
import styles from "./Dialogs.module.css";
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';


const Dialogs = (props) => {
 
    const dialogElements = props.state.dialogs.map(d => <DialogsItem key='dialogs' name={d.name} id={d.id} />)
    const messagesElements = props.state.messages.map(m => <Message key='messages' message={m.message} id={m.id} />)

    return (
        <div className={styles.backgroundImg}>
            <div className={styles.dialogsContainer}>
                <div className={styles.dialogs}>
                    {dialogElements}
                </div>
                <div className={styles.messages}>
                    {messagesElements}
                </div>
            </div>
        </div>
    )
}

export default Dialogs;