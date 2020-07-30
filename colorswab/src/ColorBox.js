import React from 'react'
import './App.css'

class ColorBox extends React.Component{

  constructor(props){
    super(props);
  }



  render(){
    return(
        <div className="Color-grid-container">
            <div className="Color-grid-item">
              <div className="Color-grid-item-color" />
              <div className="Color-grid-item-name">#000000</div>
            </div>
            <div className="Color-grid-item">2</div>
            <div className="Color-grid-item">3</div>
            <div className="Color-grid-item">4</div>
            <div className="Color-grid-item">5</div>
            <div className="Color-grid-item">6</div>
            <div className="Color-grid-item">7</div>
            <div className="Color-grid-item">8</div>
            <div className="Color-grid-item">9</div>
            <div className="Color-grid-item">10</div>
            <div className="Color-grid-item">11</div>
            <div className="Color-grid-item">12</div>
        </div>
    )
  }
}



export default ColorBox
