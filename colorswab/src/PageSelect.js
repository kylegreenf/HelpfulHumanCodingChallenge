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
    let links = [];
    const maxPage = Object.keys(colorJson).length/12;

    if (this.props.currentPageNumber == 1) {
        for (var i = 1; i < maxPage && i <= 7; i++) {
            links.push(this.generatePageLink(i));
        }
    }
    else {
        links.push(this.generatePageLink(parseInt(-1) + parseInt(this.props.currentPageNumber)));
        for (var i = 0; i < 7; i++) {
            if (parseInt(i) + parseInt(this.props.currentPageNumber) <= maxPage){   
                links.push(this.generatePageLink(parseInt(i) + parseInt(this.props.currentPageNumber)));
            }
        }
    }

    return links;

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
