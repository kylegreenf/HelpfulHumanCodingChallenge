import React from 'react'
import './App.css'

class Sidebar extends React.Component{

  constructor(props){
    super(props);
  }




  handleClick = (e) =>{
    e.preventDefault();
    this.props.searchPremade(e.target.id);
  }

  render(){
    return(
        <div className="Sidebar-container">
        <div className="Sidebar-button-container">
          <button onClick = {this.props.randomButton} className="Sidebar-button">Random Color</button>
        </div>

        <div className="Sidebar-color-selection">
          <a onClick = {this.handleClick} href="" id = "red" className="Sidebar-color-selection">
            Red
          </a>
        </div>
        <div className="Sidebar-color-selection">
          <a onClick = {this.handleClick} href="" id = "orange" className="Sidebar-color-selection">
            Orange
          </a>
        </div>
        <div className="Sidebar-color-selection">
          <a onClick = {this.handleClick} href="" id = "yellow" className="Sidebar-color-selection">
            Yellow
          </a>
        </div>
        <div className="Sidebar-color-selection">
          <a onClick = {this.handleClick} href="" id = "green" className="Sidebar-color-selection">
            Green
          </a>
        </div>
        <div className="Sidebar-color-selection">
          <a onClick = {this.handleClick} href="" id = "blue" className="Sidebar-color-selection">
            Blue
          </a>
        </div>
        <div className="Sidebar-color-selection">
          <a onClick = {this.handleClick} href="" id = "purple" className="Sidebar-color-selection">
            Purple
          </a>
        </div>
        <div className="Sidebar-color-selection">
          <a onClick = {this.handleClick} href="" id = "brown" className="Sidebar-color-selection">
            Brown
          </a>
        </div>
        <div className="Sidebar-color-selection">
          <a onClick = {this.handleClick} href="" id = "gray" className="Sidebar-color-selection">
            Gray
          </a>
        </div>
      </div>
    )
  }
}



export default Sidebar
