import React, { Component } from 'react';
import './login.css';


class Login extends Component {
	render(){
		return (
			<div className="container">
			<div className="col col-md-4 col-md-offset-4">
			<h2>Login Page</h2>
			<form name="loginForm" className="form-group">
			<lable><b>Enter User Email</b></lable>
			<input type="email" className="form-control login" placeholder="Enter Email...." required />
			<lable><b>Enter User Password</b></lable>
			<input type="password" className="form-control login"  placeholder="Enter Password...." required  />
			<button className="btn btn-primary login">Submit</button>
			</form>
			</div>
			</div>
			)
	}
} 

export default Login