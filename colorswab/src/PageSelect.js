import React from 'react'
import './App.css'

class PageSelect extends React.Component{

  constructor(props){
    super(props);
  }

  changePage(newPageNumber) {
    console.log(newPageNumber);
  }

  handleClick = (e) =>{
    e.preventDefault();
    this.props.returnNewPageNumber(e.target.id);
  }

  render(){
    return(
        <div className = "Page-selection-container">
            <a href = "" id = "1" onClick = {this.handleClick}  className = "Page-selection">1</a>
            <a href = "" id = "2" onClick = {this.handleClick}  className = "Page-selection">2</a>
            <a href = "" id = "3" onClick = {this.handleClick}  className = "Page-selection">3</a>
            <a href = "" id = "4" onClick = {this.handleClick}  className = "Page-selection">4</a>
            <a href = "" id = "5" onClick = {this.handleClick}  className = "Page-selection">5</a>
            <a href = "" id = "6" onClick = {this.handleClick}  className = "Page-selection">6</a>
        </div>
    )
  }
}



export default PageSelect
