import React from 'react';
import styles from "./MyPosts.module.css";
import Post from './Post/Post';


const MyPosts = (props) => {
    return <div>
        <div>
            <h3>My posts</h3>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add new post</button>
            </div>
        </div>
        <div>New posts:
            <Post message={'My name is Andrei!'} likesCount={5} />
            <Post message={'What a wonderful day!'} likesCount={50} />
            <Post message={'My name is Andrei!'} likesCount={5} />
            <Post message={'What a wonderful day!'} likesCount={50} />
        </div>
    </div>
}

export default MyPosts;