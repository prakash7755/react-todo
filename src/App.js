import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Register from './registerComponent/register'
import Login from './loginComponent/login'
import { Button, Nav, Navbar, NavDropdown, MenuItem, NavItem } from 'react-bootstrap';


const App = () => (
  <Router>
   <nav className="navbar navbar-inverse">
    <div className="container-fluid">
      <ul className="nav navbar-nav">
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
      </div>
      <div>
       <Route path="/register" component={Register}/>
       <Route path="/login" component={Login}/>
    </div>
    </nav>
  </Router>
)
export default App