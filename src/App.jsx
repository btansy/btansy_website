import React, {Component} from "react";
import "./App.css";
import Header from './Header.jsx';
import Form from './Form.jsx';

class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      openPage: 'Home',
    };
    this.openNewPage = this.openNewPage.bind(this);
  }

  openNewPage(pageName) {
    this.setState({openPage: pageName})
  }

  render(){
    let page;
    if (this.state.openPage === 'Home') {
      page = <h1>Welcome!</h1>;
    }
    if (this.state.openPage === 'Form') {
      page = <Form />;
    }
    return(
      <div className="App">
        <Header openNewPage={this.openNewPage} />
        {page}
      </div>
    );
  }  
}

export default App;