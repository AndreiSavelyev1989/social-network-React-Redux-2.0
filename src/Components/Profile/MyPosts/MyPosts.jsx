import React from 'react';
import styles from "./MyPosts.module.css";
import Post from './Post/Post';


const MyPosts = (props) => {

    const postElements = props.posts.map(p => <Post key={p.id} message={p.message} id={p.id} likesCount={p.likesCount} />)

    const onAddPost = () => {
        props.addNewPost();
    }

    const onPostChange = (e) => {
        let text = e.target.value;
        props.updateNewPostText(text);
    }

    return <div>
        <div>
            <h3>My posts</h3>
            <div>
                <textarea onChange={onPostChange} value={props.newPostText} />
            </div>
            <div>
                <button onClick={onAddPost}>Add new post</button>
            </div>
        </div>
        <div>New posts:
            {postElements}
        </div>
    </div>
}

export default MyPosts;