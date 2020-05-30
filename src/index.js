import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import state, { addNewPost, updateNewPostText, subscribe } from "./redux/state";

const reRenderApp = (state) => {
  ReactDOM.render(
      <BrowserRouter>
        <App
          state={state}
          addNewPost={addNewPost}
          updateNewPostText={updateNewPostText}
        />
      </BrowserRouter>,document.getElementById("root")
  );
};
reRenderApp(state);

subscribe(reRenderApp);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
