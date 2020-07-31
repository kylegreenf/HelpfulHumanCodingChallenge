import React from 'react'
import './App.css'

class Sidebar extends React.Component{

  constructor(props){
    super(props);
  }




  handleClick = (e) =>{
    e.preventDefault();
    //var info = [];
    //info[0] = "#000000";
    //info[1] = "ListView";
    //this.props.updateViewType(info);
  }

  render(){
    return(
        <div className="Sidebar-container">
        <div className="Sidebar-button-container">
          <button onClick = {this.props.randomButton} className="Sidebar-button">Random Color</button>
        </div>

        <div className="Sidebar-color-selection">
          <a onClick = {this.handleClick} href="" id = "redBtn" className="Sidebar-color-selection">
            Red
          </a>
        </div>
        <div className="Sidebar-color-selection">
          <a href="" id = "orangeBtn" className="Sidebar-color-selection">
            Orange
          </a>
        </div>
        <div className="Sidebar-color-selection">
          <a href="" id = "yellowBtn" className="Sidebar-color-selection">
            Yellow
          </a>
        </div>
        <div className="Sidebar-color-selection">
          <a href="" id = "greenBtn" className="Sidebar-color-selection">
            Green
          </a>
        </div>
        <div className="Sidebar-color-selection">
          <a href="" id = "blueBtn" className="Sidebar-color-selection">
            Blue
          </a>
        </div>
        <div className="Sidebar-color-selection">
          <a href="" id = "purpleBtn" className="Sidebar-color-selection">
            Purple
          </a>
        </div>
        <div className="Sidebar-color-selection">
          <a href="" id = "brownBtn" className="Sidebar-color-selection">
            Brown
          </a>
        </div>
        <div className="Sidebar-color-selection">
          <a href="" id = "GrayBtn" className="Sidebar-color-selection">
            Gray
          </a>
        </div>
      </div>
    )
  }
}



export default Sidebar
