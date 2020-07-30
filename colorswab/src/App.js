import React from "react";
import "./App.css";
import TopBar from './TopBar';
import ColorBox from "./ColorBox";
import Sidebar from "./Sidebar";


function App(props) {
  
  return (
    <div className="App">
      <header className="App-header">

        <link href="https://fonts.googleapis.com/css2?family=Source+Serif+Pro&display=swap" rel="stylesheet"></link>

        <TopBar/>




        <div className="Content-container">

          <Sidebar/>

          <ColorBox/>

        </div>

      </header>
    </div>
  );
}

export default App;
