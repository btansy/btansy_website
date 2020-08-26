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
  
      this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
          [name]: value
        });
      }
  
    render() {
      return (
        <form className='Form' onSubmit={this.handleSubmit}>
            <label>
            Name: 
            </label>
            <input 
              name="userName" 
              type="text" 
              value={this.state.userName}
              onChange={this.handleInputChange}></input>   
            <label>
            eMail:
            </label> 
            <input 
              name="userEmail" 
              type="email"
              value={this.state.userEmail} 
              onChange={this.handleInputChange}></input>
            <label>
            Message:   
            </label>
            <textarea 
              rows="20" 
              cols="33" 
              value={this.state.message} 
              onChange={this.handleInputChange} />
          <input type="submit" value="Submit" />
        </form>
      );
    }
}

export default Form;