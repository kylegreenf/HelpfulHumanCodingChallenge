import React, { Component } from "react";
import "./App.css";
import TopBar from './TopBar';
import ColorBox from "./ColorBox";
import Sidebar from "./Sidebar";


class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
        pageNumber: 1
    };
  }



  render() {

    return (
    <div className="App">
      <header className="App-header">

        <link href="https://fonts.googleapis.com/css2?family=Source+Serif+Pro&display=swap" rel="stylesheet"></link>

        <TopBar/>




        <div className="Content-container">

          <Sidebar/>

          <ColorBox pageNumber = {this.state.pageNumber}/>

        </div>

      </header>
    </div>
    )
  }
  
}

export default App;
