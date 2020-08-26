import React, {Component} from "react";
import "./App.css";

class Header extends Component{
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <div className="Header">
        <div className="Header-Item" onClick={()=>this.props.openNewPage('Home')}> Home </div>
        <div className="Header-Item"> Resume </div>
        <div className="Header-Item"> Projects </div>
        <div className="Header-Item" onClick={()=>this.props.openNewPage('Form')}> Contact </div>
        <div className="Header-Item"> Log In </div>
      </div>
    );
  }
}

export default Header;