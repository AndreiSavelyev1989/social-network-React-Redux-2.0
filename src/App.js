import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Profile from "./Components/Profile/Profile";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import { Route } from "react-router-dom";
import DialogsContainer from './Components/Dialogs/DialogsContainer';


function App(props) {
 
  return (
    <div className="app-container">
      <Header />
      <Navbar />
      <div className="app-container-content">
        <Route path="/profile" render={ () => <Profile  />} />
        <Route path="/dialogs" render={ () => <DialogsContainer  />} />
        <Route path="/news" render={News} />
        <Route path="/music" render={Music} />
        <Route path="/settings" render={Settings} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
