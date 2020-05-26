import React from 'react';
import styles from "./Profile.module.css";
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo';


const Profile = (props) => {
    return <div className={styles.profilePage}>
        <div className={styles.backgroundImg}>
            <ProfileInfo />
            <MyPosts />
        </div>


    </div>
}

export default Profile;