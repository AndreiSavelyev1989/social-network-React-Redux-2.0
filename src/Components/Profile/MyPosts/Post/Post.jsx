import React from 'react';
import styles from "./Post.module.css";
import postImg from './../../../../images/postImg.png'
import likeImg from './../../../../images/like.png'

const Post = (props) => {
    return <div className={styles.postContainer}>
        <img className={styles.postImg} src={postImg} alt='avatar image' />
        <span className={styles.postBody}>{props.message}</span>
        <div><img className={styles.like} src={likeImg} alt="like"/> {props.likesCount}</div>
    </div>
}

export default Post;