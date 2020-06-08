import React from 'react';
import styles from "./Profile.module.css";
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';


const Profile = (props) => {

    return <div className={styles.profilePage}>
        <div className={styles.backgroundImg}>
            <ProfileInfo />
            <MyPostsContainer />
        </div>


    </div>
}

export default Profile;