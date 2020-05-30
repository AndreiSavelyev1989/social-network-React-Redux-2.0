
let reRenderApp = () => {
  console.log('state changed')
}

const state = {
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
  },
  sidebar: {
    friends: [
      { id: 1, name: "Andrei" },
      { id: 2, name: "Dimych" },
      { id: 3, name: "Anastasia" },
    ],
  },
};

window.state = state;

export const addNewPost = () => {
  state.profilePage.posts.push({
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0,
  });
  state.profilePage.newPostText = "";
  reRenderApp(state);
};

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  reRenderApp(state);
};

export const subscribe = (observer) => {
  reRenderApp = observer;
}


export default state;
