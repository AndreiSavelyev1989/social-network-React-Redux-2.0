import React from 'react';
import { updateNewPostTextActionCreator, addNewPostActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';


const MyPostsContainer = (props) => {
    
    const state = props.store.getState();

    const addNewPost = () => {
        props.store.dispatch(addNewPostActionCreator());
    }

    const updateNewPostText = (text) => {
        props.store.dispatch(updateNewPostTextActionCreator(text));
    }

    return <MyPosts addNewPost={addNewPost} updateNewPostText={updateNewPostText} posts={state.profilePage.posts} newPostText={state.profilePage.newPostText}/>
}

export default MyPostsContainer;