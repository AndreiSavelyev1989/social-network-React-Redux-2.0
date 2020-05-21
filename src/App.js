import React, { Profiler } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Content from './Components/Content/Content';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="app-container">
     <Header />
     <Navbar />
     <Content />
     <Footer />
    </div>
  );
}

export default App;
