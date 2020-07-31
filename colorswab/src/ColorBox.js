import React from 'react'
import './App.css'
import colorJson from './colors.json'
import PageSelect from './PageSelect';

class ColorBox extends React.Component{

  constructor(props){
    super(props);
    this.state = {
        pageNumber : 1
    };

  }


  setNewNumber=(newpageNum)=>{
    this.setState({pageNumber: newpageNum})
  }


  openView() {

  }



  generateColorItem(number) {
      if (colorJson[number*this.state.pageNumber] != null) {
        var color = colorJson[number*this.state.pageNumber].hexString;
        return (
          <div onClick={this.openView} className="Color-grid-item">
              <div className="Color-grid-item-color" style={{background: color}} />
              <div className="Color-grid-item-name">{color}</div>
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
                {this.generateColorItem(12)}
            </div>   
            <PageSelect currentPageNumber = {this.state.pageNumber} returnNewPageNumber={this.setNewNumber} />
        </div>

        
    )
  }
}



export default ColorBox