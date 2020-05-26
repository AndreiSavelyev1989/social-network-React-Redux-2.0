import React from 'react';
import styles from "./MyPosts.module.css";
import Post from './Post/Post';


const MyPosts = (props) => {

    let postsData = [
        {id: 1, message: 'My name is Andrei!', likesCount: 5},
        {id: 2, message: 'What a wonderful day!', likesCount: 50},
    ]

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
            <Post message={postsData[0].message} id={postsData[0].id} likesCount={postsData[0].likesCount} />
            <Post message={postsData[1].message} id={postsData[1].id} likesCount={postsData[1].likesCount} />
        </div>
    </div>
}

export default MyPosts;