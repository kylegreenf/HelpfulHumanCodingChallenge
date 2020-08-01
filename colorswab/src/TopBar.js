import React from 'react'
import { ReactComponent as Logo } from "./logo-symbol.svg";
import './App.css'

class TopBar extends React.Component{

  constructor(props){
    super(props);
    this.state = {
    };
  }

  searchForColor = () => {
    var input = document.getElementById("searchbar");
    var filter = input.value.toUpperCase();

    this.props.updateSearchEntry(filter);

  }



  render(){
    return(
        <div className="Topbar-container">
          <div className="Logo-container">
            <Logo />
          </div>
          <div className="Searchbar-container">
            <input onKeyUp={this.searchForColor} id = "searchbar" className = "Searchbar" type="text" placeholder="Search"/>
          </div>
        </div>
    )
  }
}



export default TopBar
