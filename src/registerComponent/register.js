import React, { Component } from 'react';
import './register.css';
import { signupUser } from '../services/user'

class Register extends Component {
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
    signupUser(formData)
  }
	render(){
		return (
		<div className="container">
			<div className="col col-md-4 col-md-offset-4">
			<h2>Register Page</h2>
			<form name="registerForm" className="form-group" onSubmit={this.handleSubmit}>
			<lable><b>Enter User FullName</b></lable>
			<input type="text" ref="name" className="form-control register" placeholder="Enter FullName...." required />
			<lable><b>Enter User DOB</b></lable>
			<input type="date" ref="date" className="form-control register" placeholder="Enter Date...." required />
			<lable><b>Enter User Mob Number</b></lable>
			<input type="number" ref="mobNum" className="form-control register" placeholder="Enter Mob Number...." required />
			<lable><b>Enter User Email</b></lable>
			<input type="email" ref="email" className="form-control register" placeholder="Enter Email...." required />
			<lable><b>Enter User Password</b></lable>
			<input type="password" ref="password" className="form-control register"  placeholder="Enter Password...." required  />
			<lable><b>Enter User Conform Password</b></lable>
			<input type="password" ref="conPass" className="form-control register"  placeholder="Enter Conform Password...." required  />
			<button className="btn btn-primary register">Submit</button>
			</form>
			</div>
			</div>
		)
	}
}

export default Register