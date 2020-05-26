import React from 'react';
import styles from "./Dialogs.module.css";
import DialogsItem from './DialogsItem';
import Message from './Message';


const Dialogs = (props) => {

    const dialogs = [
        { id: 1, name: 'Andrei' },
        { id: 2, name: 'Dimych' },
        { id: 3, name: 'Anastasia' },
        { id: 4, name: 'Sveta' },
        { id: 5, name: 'Alex' },
    ]

    const messages = [
        { id: 1, message: 'Hello, how are you?' },
        { id: 2, message: 'Who is your favorite writer?' },
        { id: 3, message: 'What\'s a wonderful day!!!' },
        { id: 4, message: 'I will be front-end developer, very soon!' },
        { id: 5, message: 'My hobby is programming!' },
    ]

    const dialogElements = dialogs.map(d => <DialogsItem name={d.name} id={d.id} />)
    const messagesElements = messages.map(m => <Message message={m.message} id={m.id} />)

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