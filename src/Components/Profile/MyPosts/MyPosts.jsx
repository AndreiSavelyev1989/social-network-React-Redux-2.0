import React from 'react';
import styles from "./MyPosts.module.css";
import Post from './Post/Post';
import { reduxForm, Field } from 'redux-form';


const MyPosts = (props) => {

    const postElements = props.posts.map(p => <Post key={p.id} message={p.message} id={p.id} likesCount={p.likesCount} />)

    const createNewPost = (values) => {
        props.addNewPost(values.newPostText)
    }

    return <div>
        <h3>My posts</h3>
        <AddNewPostReduxForm onSubmit={createNewPost} />
        <div>New posts:
            {postElements}
        </div>
    </div>
}

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component='textarea' name='newPostText' placeholder='Add new post!!!' />
            </div>
            <div>
                <button>Add new post</button>
            </div>
        </form>
    )
}

const AddNewPostReduxForm = reduxForm({ form: 'newPostText' })(AddNewPostForm);

export default MyPosts;