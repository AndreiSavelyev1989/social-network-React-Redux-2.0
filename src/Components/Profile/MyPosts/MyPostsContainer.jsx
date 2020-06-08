import React from 'react';
import { updateNewPostTextActionCreator, addNewPostActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNewPost: () => {dispatch(addNewPostActionCreator())},
        updateNewPostText: (text) => {dispatch(updateNewPostTextActionCreator(text))}
    }
}

//Вместо Context API, используем connect, который делает тоже что и Context API только инкапсулирует детали

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;