import React from 'react';
import { addNewPost } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

//Вместо Context API, используем connect, который делает тоже что и Context API только инкапсулирует детали

const MyPostsContainer = connect(mapStateToProps, {addNewPost})(MyPosts)

export default MyPostsContainer;