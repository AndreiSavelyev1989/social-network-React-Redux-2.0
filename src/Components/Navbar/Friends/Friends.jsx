import React from 'react';
import styles from './../Friends/Friends.module.css'
import Friend from './Friend/Friend';

const Friends = (props) => {
    const myFriendName = props.friends.map(name => <Friend key={name.id} friendsName={name.name} id={name.id} />)
    return (
        <div>
            <h3>Friends:</h3>
            <div className={styles.friendsName}>
                {myFriendName}
            </div>
        </div>
    )
}

export default Friends;