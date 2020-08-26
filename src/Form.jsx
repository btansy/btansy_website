import React, {Component} from "react";
import "./App.css";

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        userName: '',
        userEmail: '',
        message: ''
      };
  
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(event) {
      this.setState({message: event.target.value});
    }
  
    handleSubmit(event) {
      alert('An essay was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form className='Form' onSubmit={this.handleSubmit}>
            <label>
            Name: 
            </label>
            <input type='text'></input>   
            <label>
            eMail:
            </label> 
            <input type='email'></input>
            <label>
            Message:   
            </label>
            <textarea rows="20" cols="33" value={this.state.message} onChange={this.handleChange} />
          <input type="submit" value="Submit" />
        </form>
      );
    }
}

export default Form;