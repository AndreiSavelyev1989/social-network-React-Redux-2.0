const ADD_NEW_POST = "ADD_NEW_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const SEND_MESSAGE = "SEND_MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";

const store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "My name is Andrei!", likesCount: 5 },
        { id: 2, message: "What a wonderful day!", likesCount: 50 },
        { id: 3, message: "I was born in Belarus", likesCount: 10 },
        { id: 4, message: "My native city is Mogilev", likesCount: 500 },
      ],
      newPostText: "Hello World",
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Andrei" },
        { id: 2, name: "Dimych" },
        { id: 3, name: "Anastasia" },
        { id: 4, name: "Sveta" },
        { id: 5, name: "Alex" },
      ],
      messages: [
        { id: 1, message: "Hello, how are you?" },
        { id: 2, message: "Who is your favorite writer?" },
        { id: 3, message: "What's a wonderful day!!!" },
        { id: 4, message: "I will be front-end developer, very soon!" },
        { id: 5, message: "My hobby is programming!" },
      ],
      newMessageBody: "",
    },
    sidebar: {
      friends: [
        { id: 1, name: "Andrei" },
        { id: 2, name: "Dimych" },
        { id: 3, name: "Anastasia" },
      ],
    },
  },
  _callSubscriber() {
    console.log("state changed");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    if (action.type === ADD_NEW_POST) {
      this._state.profilePage.posts.push({
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      });
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSAGE) {
      let body = this._state.dialogsPage.newMessageBody;
      this._state.dialogsPage.messages.push({ id: 6, message: body });
      this._state.dialogsPage.newMessageBody = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.dialogsPage.newMessageBody = action.body;
      this._callSubscriber(this._state);
    }
  },
};

export const addNewPostActionCreator = () => ({ type: ADD_NEW_POST });
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });
export const addNewMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body });


window.store = store;

export default store;
