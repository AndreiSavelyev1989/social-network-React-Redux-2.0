import React from 'react';
import styles from "./Dialogs.module.css";
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';


const Dialogs = (props) => {

    const dialogElements = props.state.dialogs.map(d => <DialogsItem key={d.id} name={d.name} id={d.id} />)
    const messagesElements = props.state.messages.map(m => <Message key={m.id} message={m.message} id={m.id} />)

    const newMessage = React.createRef();
    const sendMessage = () => {
        let message = newMessage.current.value
        alert(message)
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
                        <textarea ref={newMessage}></textarea>
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