import React from 'react';
import { updateNewPostTextActionCreator, addNewPostActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import StoreContext from '../../../StoreContext';


const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
            const state = store.getState();

            const addNewPost = () => {
                store.dispatch(addNewPostActionCreator());
            }

            const updateNewPostText = (text) => {
                store.dispatch(updateNewPostTextActionCreator(text));
            }

            return <MyPosts
                addNewPost={addNewPost}
                updateNewPostText={updateNewPostText}
                posts={state.profilePage.posts}
                newPostText={state.profilePage.newPostText} />
        }}

        </StoreContext.Consumer>)
}

export default MyPostsContainer;