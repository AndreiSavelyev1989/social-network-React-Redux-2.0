import React from 'react';
import styles from "./Dialogs.module.css";

const Dialogs = (props) => {
    return (
        <div className={styles.backgroundImg}>
            <div className={styles.dialogsContainer}>
                <div className={styles.dialogs}>
                    <div className={styles.dialogsItem}>Andrei</div>
                    <div className={styles.dialogsItem}>Dimych</div>
                    <div className={styles.dialogsItem}>Anastasia</div>
                    <div className={styles.dialogsItem}>Sveta</div>
                    <div className={styles.dialogsItem}>Alex</div>
                </div>
                <div className={styles.messages}>
                    <div className={styles.message}>Hello, how are you?</div>
                    <div className={styles.message}>Who is your favorite writer?</div>
                    <div className={styles.message}>What's a wonderful day!!!</div>
                    <div className={styles.message}>I will be front-end developer, very soon!</div>
                    <div className={styles.message}>My hobby is programming! </div>
                </div>
            </div>


        </div>
    )
}

export default Dialogs;