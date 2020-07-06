import React from 'react';
import styles from './../ProfileInfo/ProfileInfo.module.css';
import Preloader from '../../common/Preloader';
import ProfileStatus from './ProfileStatus';


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return <div>
        <div className = {styles.profileInfoContainer}>
            <h2>Profile Info: </h2>
            <div><img src={props.profile.photos.large} /></div>
            <div> Full name: {props.profile.fullName}</div>
            <div> About me: {props.profile.aboutMe}</div>
            <div> Looking for a job: {props.profile.lookingForAJob ? 'yes, I do!!!' : `no, I don't` }</div>
            <div> My professional skills: {props.profile.lookingForAJobDescription}</div>
            <ProfileStatus status = 'Hello world'/>
        </div>
    </div>
}

export default ProfileInfo;