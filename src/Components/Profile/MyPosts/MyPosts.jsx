import React from 'react';
import styles from "./MyPosts.module.css";
import Post from './Post/Post';


const MyPosts = (props) => {

    const posts = [
        {id: 1, message: 'My name is Andrei!', likesCount: 5},
        {id: 2, message: 'What a wonderful day!', likesCount: 50},
        {id: 3, message: 'I was born in Belarus', likesCount: 10},
        {id: 4, message: 'My native city is Mogilev', likesCount: 500},
    ]

    const postElements = posts.map(p => <Post message={p.message} id={p.id} likesCount={p.likesCount} />)

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
            { postElements }
        </div>
    </div>
}

export default MyPosts;