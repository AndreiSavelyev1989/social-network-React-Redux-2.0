const SEND_MESSAGE = "SEND_MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";

const initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 6, message: body }],
        newMessageBody: ''
      }
    
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body
      }
      
    default:
      return state;
  }
};

export const addNewMessage = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBody = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body });

export default dialogsReducer;
