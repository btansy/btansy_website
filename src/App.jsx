import React, {Component} from "react";
import "./App.css";
import Header from './Header.jsx';
import Form from './Form.jsx';

class App extends Component{

  constructor(props) {
    super(props);
    this.openNewPage = this.openNewPage.bind(this);
    this.state = {
      openPage: 'Home',
    };
  }

  openNewPage(pageName) {
    this.setState({openPage: pageName})
  }

  render(){
    let page;
    if (this.openPage === 'Home') {
      page = <h1>Welcome!</h1>
    }
    if (this.openPage === 'Form') {
      page = <Form />
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