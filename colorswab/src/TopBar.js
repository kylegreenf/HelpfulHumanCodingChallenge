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
    //if (input != null) {
      var filter = input.value.toUpperCase();
      console.log(this.props);
    //}

    this.props.updateSearchEntry(filter);
    //this.props.updateSearchEntry(this.props);

  }



  render(){
    console.log(this.props);
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
