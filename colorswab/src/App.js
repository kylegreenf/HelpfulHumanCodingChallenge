import React, { Component } from "react";
import "./App.css";
import TopBar from './TopBar';
import ColorBox from "./ColorBox";
import Sidebar from "./Sidebar";
import DetailView from "./DetailView";


class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
        pageNumber: 1,
        viewType: "ListView",
        colorChosen: "#000000"
    };
  }

  updateViewType=(newViewType)=> {
    this.setState({
      colorChosen: newViewType[0],
      viewType: newViewType[1]})
  }

  currentViewRender() {
    if (this.state.viewType === "ListView") {
      return <ColorBox pageNumber = {this.state.pageNumber} updateViewType={this.updateViewType}/>   
    }
    else {
      return <DetailView colorChosen = {this.state.colorChosen}/>
    }
  }



  render() {

    return (
    <div className="App">
      <header className="App-header">

        <link href="https://fonts.googleapis.com/css2?family=Source+Serif+Pro&display=swap" rel="stylesheet"></link>

        <TopBar/>




        <div className="Content-container">

          <Sidebar/>

          {this.currentViewRender()}

        </div>

      </header>
    </div>
    )
  }
  
}

export default App;
