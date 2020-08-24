import React, {Component} from "react";
import "./App.css";
import Header from './Header.jsx';

class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      awesome: true,
    };
  }

  render(){
    return(
      <div className="App">
        <Header />
        <h1> Coming Soon... </h1>
      </div>
    );
  }
}

export default App;