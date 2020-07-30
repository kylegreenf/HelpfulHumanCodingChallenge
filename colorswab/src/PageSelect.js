import React from 'react'
import './App.css'

class PageSelect extends React.Component{

  constructor(props){
    super(props);
  }

  changePage(newPageNumber) {

  }


  render(){
    return(
        <div className = "Page-selection-container">
            <a id = "pg1" onClick = {this.changePage(1)} className = "Page-selection">1</a>
            <a onClick = {this.changePage(2)} className = "Page-selection">2</a>
            <a onClick = {this.changePage(3)} className = "Page-selection">3</a>
            <a onClick = {this.changePage(4)} className = "Page-selection">4</a>
            <a onClick = {this.changePage(5)} className = "Page-selection">5</a>
            <a onClick = {this.changePage(6)} className = "Page-selection">6</a>
        </div>
    )
  }
}



export default PageSelect
