import React, { Component } from 'react';
import './login.css';
import { loginUser } from '../services/user';

class Login extends Component {
	constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    
    const formData = {};
    for (let field in this.refs) {
      formData[field] = this.refs[field].value;
    }
    loginUser(formData)
  }
	render(){
		return (
			<div className="container">
			<div className="col col-md-4 col-md-offset-4">
			<h2>Login Page</h2>
			<form name="loginForm" className="form-group" onSubmit={this.handleSubmit}>
			<lable><b>Enter User Email</b></lable>
			<input ref="email" type="email" className="form-control login" placeholder="Enter Email...." required />
			<lable><b>Enter User Password</b></lable>
			<input ref="password"type="password" className="form-control login"  placeholder="Enter Password...." required  />
			<button className="btn btn-primary login">Submit</button>
			</form>
			</div>
			</div>
			)
	}
} 

export default Login