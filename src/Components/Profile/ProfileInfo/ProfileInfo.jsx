import React from 'react';
import styles from './../ProfileInfo/ProfileInfo.module.css';
import Preloader from '../../common/Preloader';
import ProfileStatus from './ProfileStatus';
import usersPhoto from "./../../../images/usersPhoto.png";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return <div>
        <div className={styles.profileInfoContainer}>
            <h2>Profile Info: </h2>
            <div className={styles.profileInfo}>
                <div className={styles.userPhoto}>
                    <div><img src={props.profile.photos.large ? props.profile.photos.large : usersPhoto} /></div>
                </div>

                <div className={styles.descriptionUserData}>
                    <div><span>Full name:</span>  {props.profile.fullName}</div>
                    <div><span>About me:</span>  {props.profile.aboutMe}</div>
                    <div><span>Looking for a job:</span>  {props.profile.lookingForAJob ? 'yes, I do!!!' : `no, I don't`}</div>
                    <div><span>My professional skills:</span>  {props.profile.lookingForAJobDescription}</div>
                    <ProfileStatus status='Hello world'/>
                </div>
            </div>
        </div>
    </div>
}

export default ProfileInfo;