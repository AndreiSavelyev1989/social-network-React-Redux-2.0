import { profileAPI } from "../api/api";

const ADD_NEW_POST = "ADD_NEW_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";

const initialState = {
  posts: [
    { id: 1, message: "My name is Andrei!", likesCount: 5 },
    { id: 2, message: "What a wonderful day!", likesCount: 50 },
    { id: 3, message: "I was born in Belarus", likesCount: 10 },
    { id: 4, message: "My native city is Mogilev", likesCount: 500 },
  ],
  profile: null,
  status: ""
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_POST:
      let newPost = {
        id: 5,
        message: action.newPostText,
        likesCount: 0
      };

      return {
        ...state,
        posts: [...state.posts, newPost],
      };

    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      };

    case SET_USER_STATUS:
      return {
        ...state,
        status: action.status
      };

    default:
      return state;
  }
};

export const addNewPost = (newPostText) => ({ type: ADD_NEW_POST, newPostText });

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile
});
export const setUserStatus = (status) => ({
  type: SET_USER_STATUS,
  status
});

export const getUserProfile = (userId) => (dispatch) => {
  profileAPI.getUserProfile(userId).then((data) => {
    dispatch(setUserProfile(data));
  });
};

export const getUserStatus = (userId) => (dispatch) => {
  profileAPI.getUserStatus(userId).then((data) => {
    dispatch(setUserStatus(data));
  });
};

export const updateUserStatus = (status) => (dispatch) => {
  profileAPI.updateUserStatus(status).then((data) => {
    if(data.resultCode === 0) {
      dispatch(setUserStatus(status));
    }
    
  });
};

export default profileReducer;
