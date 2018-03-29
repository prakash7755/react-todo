import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './loginComponent/login'
import Register from './registerComponent/register'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));



registerServiceWorker();
