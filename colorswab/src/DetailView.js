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

  }


  handleClick = (e) =>{
    e.preventDefault();
    var info = [];
    info[0] = "#000000";
    info[1] = "ListView";
    this.props.updateViewType(info);
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
                    <div className = "Detail-view-other-color-container">
                        <div className = "Detail-view-other-color" style = {{background: "blue"}}>

                        </div>
                        <div className = "Detail-view-other-color-name">
                            #CFFF
                        </div>
                    </div>
                    <div className = "Detail-view-other-color-container">
                        <div className = "Detail-view-other-color" style = {{background: "blue"}}>

                        </div>
                        <div className = "Detail-view-other-color-name">
                            #CFFF
                        </div>
                    </div>
                    <div className = "Detail-view-other-color-container">
                        <div className = "Detail-view-other-color" style = {{background: "blue"}}>

                        </div>
                        <div className = "Detail-view-other-color-name">
                            #CFFF
                        </div>
                    </div>
                    <div className = "Detail-view-other-color-container">
                        <div className = "Detail-view-other-color" style = {{background: "blue"}}>

                        </div>
                        <div className = "Detail-view-other-color-name">
                            #CFFF
                        </div>
                    </div>
                    <div className = "Detail-view-other-color-container">
                        <div className = "Detail-view-other-color" style = {{background: "blue"}}>

                        </div>
                        <div className = "Detail-view-other-color-name">
                            #CFFF
                        </div>
                    </div>

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