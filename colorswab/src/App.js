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
        colorChosen: "#000000",
        currentSearch: "",
    };

  }

  updateViewType=(newViewType)=> {
    this.setState({
      colorChosen: newViewType[0],
      viewType: newViewType[1]})
  }

  updateSearchEntry=(newSearch)=> {
    this.setState({
      currentSearch: newSearch})
  }

  searchPremade=(colorSearch)=> {
    this.setState({
      currentSearch: colorSearch.toUpperCase()
    })
  }

  findRandom=()=> {
    var randomColor = Math.floor(Math.random() * 1000).toString(16);
    randomColor = "#"+ randomColor+randomColor
    this.setState({
      colorChosen: randomColor,
      viewType: "DetailView"})
  }

  currentViewRender() {
    if (this.state.viewType === "ListView") {
      return <ColorBox pageNumber = {this.state.pageNumber} updateViewType={this.updateViewType} searchValue = {this.state.currentSearch}/>   
    }
    else {
      return <DetailView colorChosen = {this.state.colorChosen} updateViewType={this.updateViewType}/>
    }
  }




  render() {

    return (
    <div className="App">
      <header className="App-header">

        <link href="https://fonts.googleapis.com/css2?family=Source+Serif+Pro&display=swap" rel="stylesheet"></link>

        <TopBar updateSearchEntry = {this.updateSearchEntry}/>

        <div className="Content-container">

          <Sidebar randomButton = {this.findRandom} searchPremade = {this.searchPremade}/>

          {this.currentViewRender()}

        </div>

      </header>
    </div>
    )
  }
  
}

export default App;
