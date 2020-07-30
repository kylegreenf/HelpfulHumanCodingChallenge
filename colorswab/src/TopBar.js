import React from 'react'
import { ReactComponent as Logo } from "./logo-symbol.svg";
import './App.css'

class TopBar extends React.Component{

  constructor(props){
    super(props);
  }



  render(){
    return(
        <div className="Topbar-container">
          <div className="Logo-container">
            <Logo />
          </div>
          <div className="searchbar" />
        </div>
    )
  }
}



export default TopBar
