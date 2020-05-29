import React from 'react';
import styles from './Friend.module.css'
import friendsImg from './../../../../images/friendsImg.png'

const Friend = (props) => {
    return (
        <div className={styles.friend}>
          <img src={friendsImg} alt="friend photo"/>{props.friendsName}
        </div>
    )
}

export default Friend;