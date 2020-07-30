import React from 'react'
import './App.css'
import colorJson from './colors.json'

class ColorBox extends React.Component{

  constructor(props){
    super(props);
    this.state = {
        pageNumber : 0
    };

  }





  changeColor() {

  }



  generateColorItem(color) {
      return (
        <div onClick={this.changeColor} className="Color-grid-item">
            <div className="Color-grid-item-color" style={{background: color}} />
            <div className="Color-grid-item-name">{color}</div>
        </div>
      )
  }

  render(){
    const data = colorJson;
    var color = data[3].hexString;
    return(
        <div className="Color-grid-container">
            {this.generateColorItem("#cffff1")}
            {this.generateColorItem(color)}
            {this.generateColorItem("blue")}
            {this.generateColorItem("blue")}
            {this.generateColorItem("blue")}
            {this.generateColorItem("blue")}
            {this.generateColorItem("blue")}
            {this.generateColorItem("blue")}
            {this.generateColorItem("blue")}
            {this.generateColorItem("blue")}
            {this.generateColorItem("blue")}
            {this.generateColorItem("blue")}
        </div>
    )
  }
}



export default ColorBox
