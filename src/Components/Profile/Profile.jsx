import React from 'react';
import styles from "./Profile.module.css";
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {

    return <div className={styles.profilePage}>
        <div className={styles.backgroundImg}>
            <ProfileInfo />
            <MyPosts posts={props.state.posts}/>
        </div>


    </div>
}

export default Profile;