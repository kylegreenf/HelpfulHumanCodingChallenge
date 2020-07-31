import React from 'react'
import './App.css'
import colorJson from './colors.json'

class PageSelect extends React.Component{

  constructor(props){
    super(props);
    console.log(props);
  }

  changePage(newPageNumber) {
    console.log(newPageNumber);
  }

  handleClick = (e) =>{
    e.preventDefault();
    this.props.returnNewPageNumber(e.target.id);
  }

  generatePageSelection() {
    var cumulation;
    for (var i = 0; i < Object.keys(colorJson).length/12; i++) {
        console.log(this.generatePageLink(i+1));
        return this.generatePageLink(i+1);
    }
    return cumulation;

  }

  generatePageLink(pgNumber) { 
    return(
        <a href = "" id = {pgNumber} onClick = {this.handleClick}  className = "Page-selection">{pgNumber}</a>
        )
  }

  render(){
    return(
        <div className = "Page-selection-container">
            {this.generatePageSelection()}
        </div>
    )
  }
}



export default PageSelect
