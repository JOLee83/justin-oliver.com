import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css'
import * as smoothscroll from 'smoothscroll-polyfill';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
smoothscroll.polyfill();
