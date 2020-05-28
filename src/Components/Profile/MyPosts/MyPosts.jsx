import React from 'react';
import styles from "./MyPosts.module.css";
import Post from './Post/Post';


const MyPosts = (props) => {

    const postElements = props.posts.map(p => <Post key='postsId' message={p.message} id={p.id} likesCount={p.likesCount} />)

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