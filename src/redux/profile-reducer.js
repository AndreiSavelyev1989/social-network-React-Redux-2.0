const ADD_NEW_POST = "ADD_NEW_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

const initialState = {
  posts: [
    { id: 1, message: "My name is Andrei!", likesCount: 5 },
    { id: 2, message: "What a wonderful day!", likesCount: 50 },
    { id: 3, message: "I was born in Belarus", likesCount: 10 },
    { id: 4, message: "My native city is Mogilev", likesCount: 500 },
  ],
  newPostText: "Hello World",
  profile: null
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_POST: 
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0
      }

      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
      }
    

    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText
      };

    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      };
    
    default:
      return state;
  }
};

export const addNewPost = () => ({ type: ADD_NEW_POST });
export const updateNewPostText = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });

export default profileReducer;
