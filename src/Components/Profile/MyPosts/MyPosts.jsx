import React  from 'react';
import styles from "./MyPosts.module.css";
import Post from './Post/Post';


const MyPosts = (props) => {

    const postElements = props.posts.map(p => <Post key={p.id} message={p.message} id={p.id} likesCount={p.likesCount} />)

    const newPostText = React.createRef();

    const addPost = () => {
        props.addNewPost();
    }

    const onPostChange = () => {
        
       let text = newPostText.current.value;
        props.updateNewPostText(text);
    }

    return <div>
        <div>
            <h3>My posts</h3>
            <div>
                <textarea ref={newPostText} onChange={onPostChange} value={props.newPostText}/>
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