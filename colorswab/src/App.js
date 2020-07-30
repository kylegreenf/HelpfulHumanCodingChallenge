import React from "react";
import "./App.css";
//import TopBar from "./TopBar";
import { ReactComponent as Logo } from "./logo-symbol.svg";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Topbar-container">
          <div className="Logo-container">
            <Logo />
          </div>
          <div className="searchbar" />
        </div>

        <div className="Content-container">
          <div className="Sidebar-container">
            <div className="Sidebar-button-container">
              <button className="Sidebar-button">Random Color</button>
            </div>
            <a
              href="https://www.w3schools.com/css/css3_flexbox.asp"
              className="Sidebar-color-selection"
            >
              Red
            </a>
            <div className="Sidebar-color-selection">Orange</div>
            <div className="Sidebar-color-selection">Yellow</div>
            <div className="Sidebar-color-selection">Green</div>
            <div className="Sidebar-color-selection">Blue</div>
            <div className="Sidebar-color-selection">Purple</div>
            <div className="Sidebar-color-selection">Brown</div>
            <div className="Sidebar-color-selection">Gray</div>
          </div>

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
        </div>
      </header>
    </div>
  );
}

export default App;
