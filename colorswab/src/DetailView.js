import React from 'react'
import './App.css'
import colorJson from './colors.json'
import PageSelect from './PageSelect';

class DetailView extends React.Component{

  constructor(props){
    super(props);
    this.state = {
        colorChosenHex : this.props.colorChosen
    };
    //console.log(this.props);
    this.generateSimilarColor();

  }


  handleClick = (e) =>{
    e.preventDefault();
    var info = [];
    if (e.target.title.trim() != "") {
        info[0] = e.target.title;
        info[1] = "DetailView"
        this.setState({colorChosenHex: info[0]})
        this.props.updateViewType(info);
    }
    else {
        info[0] = "#000000";
        info[1] = "ListView";
        this.props.updateViewType(info);
    }

  }

  generateSimilarColor(num) {
    var randomColor = Math.floor(Math.random() * 500).toString(16);
    randomColor = "#"+ randomColor+randomColor;
    return randomColor;
  }

  generateOtherColorOptions() {
      var colormade = this.generateSimilarColor(1);
    return (
        <div onClick={this.handleClick} className = "Detail-view-other-color-container">
            <div title = {colormade} className = "Detail-view-other-color" style = {{background: colormade}}>

            </div>
            <div title = {colormade} className = "Detail-view-other-color-name">
                {colormade}
            </div>
        </div>
      )
  }


  render(){
    return(
        <div>
            <div className="Detail-view-container">
                <div className = "Detail-view-big-color-container">
                    <div className="Detail-view-big-color" style={{background: this.state.colorChosenHex}}>

                    </div>
                    <div className = "Detail-view-big-color-name">
                        <div className = "Detail-view-big-color-text">
                        {this.state.colorChosenHex} </div>
                    </div>
                </div>

                <div className = "Detail-view-other-color-container-container">
                    {this.generateOtherColorOptions()}
                    {this.generateOtherColorOptions()}
                    {this.generateOtherColorOptions()}
                    {this.generateOtherColorOptions()}
                    {this.generateOtherColorOptions()}
                </div>
                <div className = "Detail-view-clear-button-container">
                    <button onClick = {this.handleClick} className = "Detail-view-clear-button">
                        Clear
                    </button>
                </div>
            </div>   
        </div>

        
    )
  }
}



export default DetailView