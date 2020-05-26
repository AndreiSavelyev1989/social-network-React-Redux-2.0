import React from 'react';
import styles from "./Dialogs.module.css";
import DialogsItem from './DialogsItem';
import Message from './Message';


const Dialogs = (props) => {
    return (
        <div className={styles.backgroundImg}>
            <div className={styles.dialogsContainer}>
                <div className={styles.dialogs}>
                    <DialogsItem name='Andrei' id='1' />
                    <DialogsItem name='Dimych' id='2' />
                    <DialogsItem name='Anastasia' id='3' />
                    <DialogsItem name='Sveta' id='4' />
                    <DialogsItem name='Alex' id='5' />
                </div>
                <div className={styles.messages}>
                    <Message message='Hello, how are you?' />
                    <Message message='Who is your favorite writer?' />
                    <Message message="What's a wonderful day!!!" />
                    <Message message='I will be front-end developer, very soon!' />
                    <Message message='My hobby is programming!' />
                </div>
            </div>
        </div>
    )
}

export default Dialogs;