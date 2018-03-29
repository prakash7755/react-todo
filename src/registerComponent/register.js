import React, { Component } from 'react';
import './register.css';

class Register extends Component {
	render(){
		return (
		<div className="container">
			<div className="col col-md-4 col-md-offset-4">
			<h2>Register Page</h2>
			<form name="registerForm" className="form-group">
			<lable><b>Enter User FullName</b></lable>
			<input type="text" className="form-control register" placeholder="Enter FullName...." required />
			<lable><b>Enter User DOB</b></lable>
			<input type="date" className="form-control register" placeholder="Enter Date...." required />
			<lable><b>Enter User Mob Number</b></lable>
			<input type="number" className="form-control register" placeholder="Enter Mob Number...." required />
			<lable><b>Enter User Email</b></lable>
			<input type="email" className="form-control register" placeholder="Enter Email...." required />
			<lable><b>Enter User Password</b></lable>
			<input type="password" className="form-control register"  placeholder="Enter Password...." required  />
			<lable><b>Enter User Conform Password</b></lable>
			<input type="password" className="form-control register"  placeholder="Enter Conform Password...." required  />
			<button className="btn btn-primary register">Submit</button>
			</form>
			</div>
			</div>
		)
	}
}

export default Register