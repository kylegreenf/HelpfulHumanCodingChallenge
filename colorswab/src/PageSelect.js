import React from 'react'
import './App.css'
import colorJson from './colors.json'

class PageSelect extends React.Component{

  constructor(props){
    super(props);
  }

  handleClick = (e) =>{
    e.preventDefault();
    this.props.returnNewPageNumber(e.target.id);
  }

  generatePageSelection() {
    let links = [];
    const maxPage = Object.keys(colorJson).length/12 + 1;

    if (this.props.currentPageNumber == 1) {
        links.push(<a href = "" id = "1" onClick = {this.handleClick}  className = "Page-selection-chosen">1</a>)
        for (var i = 2; i < maxPage && i <= 7; i++) {
            links.push(this.generatePageLink(i));
        }
    }
    else {
        links.push(this.generatePageLink(parseInt(-1) + parseInt(this.props.currentPageNumber)));
        links.push(<a href = "" id = {this.props.currentPageNumber} onClick = {this.handleClick}  className = "Page-selection-chosen">{this.props.currentPageNumber}</a>)

        for (var i = 1; i < 8; i++) {
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
