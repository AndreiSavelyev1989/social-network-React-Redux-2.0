import React from 'react';
import styles from "./Profile.module.css";
import MyPosts from './MyPosts/MyPosts';


const Profile = (props) => {
    return <div className={styles.profilePage}>
        <div className={styles.backgroundImg}>
            <MyPosts />
        </div>


    </div>
}

export default Profile;