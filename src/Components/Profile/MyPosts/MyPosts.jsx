import React from 'react';
import styles from "./MyPosts.module.css";
import Post from './Post/Post';


const MyPosts = (props) => {
    return <div>
        <div>ava + description</div>
        <div>My posts
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add new post</button>
            </div>
            <div>New posts:
                <Post message={'My name is Andrei!'} likesCount={5}/>
                <Post message={'What a wonderful day!'} likesCount={50}/>
            </div>
        </div>
    </div>
}

export default MyPosts;