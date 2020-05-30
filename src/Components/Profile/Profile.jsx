import React from 'react';
import styles from "./Profile.module.css";
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {

    return <div className={styles.profilePage}>
        <div className={styles.backgroundImg}>
            <ProfileInfo />
            <MyPosts 
            posts={props.profilePage.posts}
            newPostText={props.profilePage.newPostText} 
            addNewPost={props.addNewPost}
            updateNewPostText={props.updateNewPostText}/>
        </div>


    </div>
}

export default Profile;