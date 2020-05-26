import React from 'react';
import styles from "./Dialogs.module.css";
import DialogsItem from './DialogsItem';
import Message from './Message';


const Dialogs = (props) => {
    let dialogsData = [
        {id: 1, name: 'Andrei'},
        {id: 2, name: 'Dimych'},
        {id: 3, name: 'Anastasia'},
        {id: 4, name: 'Sveta'},
        {id: 5, name: 'Alex'},
    ]

    let messagesData = [
        {id: 1, message: 'Hello, how are you?'},
        {id: 2, message: 'Who is your favorite writer?'},
        {id: 3, message: 'What\'s a wonderful day!!!'},
        {id: 4, message: 'I will be front-end developer, very soon!'},
        {id: 5, message: 'My hobby is programming!'},
    ]

    return (
        <div className={styles.backgroundImg}>
            <div className={styles.dialogsContainer}>
                <div className={styles.dialogs}>
                    <DialogsItem name={dialogsData[0].name} id={dialogsData[0].id} />
                    <DialogsItem name={dialogsData[1].name} id={dialogsData[1].id} />
                </div>
                <div className={styles.messages}>
                    <Message message={messagesData[0].message} id={messagesData[0].id} />
                    <Message message={messagesData[1].message} id={messagesData[1].id} />
                </div>
            </div>
        </div>
    )
}

export default Dialogs;