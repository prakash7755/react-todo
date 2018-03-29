import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Register from './registerComponent/register';
import Login from './loginComponent/login';
import Todo from './todoComponent/todo';


const App = () => (
 
  <Router>
  <div>
   <nav className="navbar navbar-inverse">
    <div className="container-fluid">
      <ul className="nav navbar-nav">
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/todo">Todo</Link></li>
      </ul>
      </div>
      </nav>
      <div>
       <Route exact path="/" component={Login}/>
       <Route path="/register" component={Register} />
       <Route path="/login" component={Login} />
       <Route path="/todo" component={Todo} />
    </div>
    </div>
  </Router>

)
export default App