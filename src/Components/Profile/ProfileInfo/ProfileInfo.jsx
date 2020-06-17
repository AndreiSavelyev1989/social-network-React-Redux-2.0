import React from 'react';
import styles from './../ProfileInfo/ProfileInfo.module.css';
import Preloader from '../../common/Preloader';


const ProfileInfo = (props) => {
    if (!props.profile){
        return <Preloader />
    }
    return <div>
        <div>
            <div>ava + description</div>
            <div><img src={props.profile.photos.large} /></div>
        </div>
    </div>
}

export default ProfileInfo;