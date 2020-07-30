import React from 'react'

class TopBar extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      timeframeChosen : ""
    };
;
  }

  // update = () => {
  //   console.log("aaaaaa");
  //   this.props.timelineUpdate("test");
  // }


  // handleClick = (e) =>{
  //   e.preventDefault();
  //   if(e.target.matches('.timeframe-unselected')){
  //     var selected = document.getElementsByClassName("timeframe-selected");
  //     var i;
  //     for(i = 0; i < selected.length; i++){
  //       selected[i].className = "timeframe-unselected";
  //     }
  //     e.target.className = "timeframe-selected";
  //     this.props.timelineUpdate(e.target.id);
  //   }
  // }


  render(){
    return(
        <div className="top-bar-container" data-sticky-container>
            <div className="sticky sticy-topbar" >
                <div className="top-bar">
                    <ul className="menu" data-dropdown-menu>
                        <li className="menu-text"><div className="logoimg">xxxxxxx</div></li>
                        <li className = "returnlogincontainer"><a className = "logout" href='http://localhost:8888'>Log Out</a></li>
                        <li className = "userinfocontainer"><h1 className="username">xxxx</h1><img alt = "" className = "profilepic"></img></li>
                    </ul>
                </div>
                
            </div>
        </div>
    )
  }
}



export default TopBar
