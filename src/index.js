import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css'

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
