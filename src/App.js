import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import { Route } from "react-router-dom";


function App(props) {
 
  return (
    <div className="app-container">
      <Header />
      <Navbar state={props.state.sidebar}/>
      <div className="app-container-content">
        <Route path="/profile" render={ () => <Profile 
        profilePage={props.state.profilePage}
        addNewPost={props.addNewPost}/>}
        updateNewPostText={props.updateNewPostText} />
        <Route path="/dialogs" render={ () => <Dialogs state={props.state.dialogsPage}/>} />
        <Route path="/news" render={News} />
        <Route path="/music" render={Music} />
        <Route path="/settings" render={Settings} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
