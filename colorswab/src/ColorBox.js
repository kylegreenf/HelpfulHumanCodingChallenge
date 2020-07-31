import React from 'react'
import './App.css'
import colorJson from './colors.json'
import PageSelect from './PageSelect';

class ColorBox extends React.Component{

  constructor(props){
    super(props);
    this.state = {
        pageNumber : 1,
        searchItem: ""
    };

  }


  setNewNumber=(newpageNum)=>{
    this.setState({pageNumber: newpageNum})
  }

  handleClick = (e) =>{
    e.preventDefault();
    var info = [];
    info[0] = e.target.title;
    info[1] = "DetailView";
    this.props.updateViewType(info);
  }



  generateColorItem(number) {
      if (colorJson[number + ((this.state.pageNumber-1)*12)] != null) {
        var color = colorJson[number + ((this.state.pageNumber-1)*12)].hexString;
        return (
          <div title = {color} onClick={this.handleClick} className="Color-grid-item">
              <div title = {color} className = {color} className="Color-grid-item-color" style={{background: color}} />
              <div title = {color} className = {color} className="Color-grid-item-name">{color}</div>
          </div>
        )
      }
      else {
          console.log("NULL!");
      }
  }

  render(){
    return(
        <div>
            <div className="Color-grid-container">
                {this.generateColorItem(0)}
                {this.generateColorItem(1)}
                {this.generateColorItem(2)}
                {this.generateColorItem(3)}
                {this.generateColorItem(4)}
                {this.generateColorItem(5)}
                {this.generateColorItem(6)}
                {this.generateColorItem(7)}
                {this.generateColorItem(8)}
                {this.generateColorItem(9)}
                {this.generateColorItem(10)}
                {this.generateColorItem(11)}
            </div>   
            <PageSelect currentPageNumber = {this.state.pageNumber} returnNewPageNumber={this.setNewNumber} />
        </div>

        
    )
  }
}



export default ColorBox