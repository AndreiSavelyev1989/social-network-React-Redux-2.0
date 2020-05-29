import React, { createRef } from 'react';
import styles from "./MyPosts.module.css";
import Post from './Post/Post';


const MyPosts = (props) => {

    const postElements = props.posts.map(p => <Post key={p.id} message={p.message} id={p.id} likesCount={p.likesCount} />)

    const newPostText = React.createRef();

    const addPost = () => {
        const text = newPostText.current.value
        alert(text)
    }

    return <div>
        <div>
            <h3>My posts</h3>
            <div>
                <textarea ref={newPostText}></textarea>
            </div>
            <div>
                <button onClick={addPost}>Add new post</button>
            </div>
        </div>
        <div>New posts:
            { postElements }
        </div>
    </div>
}

export default MyPosts;