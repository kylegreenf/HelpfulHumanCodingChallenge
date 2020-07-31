import React from 'react'
import './App.css'

class Sidebar extends React.Component{

  constructor(props){
    super(props);
  }



  render(){
    return(
        <div className="Sidebar-container">
        <div className="Sidebar-button-container">
          <button className="Sidebar-button">Random Color</button>
        </div>
        <a
          href=""
          id = "redBtn"
          className="Sidebar-color-selection"
        >
          Red
        </a>
        <div className="Sidebar-color-selection">Orange</div>
        <div className="Sidebar-color-selection">Yellow</div>
        <div className="Sidebar-color-selection">Green</div>
        <div className="Sidebar-color-selection">Blue</div>
        <div className="Sidebar-color-selection">Purple</div>
        <div className="Sidebar-color-selection">Brown</div>
        <div className="Sidebar-color-selection">Gray</div>
      </div>
    )
  }
}



export default Sidebar
