import React from 'react';
import ReactDOM from 'react-dom';
import Raven from 'raven-js';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './css/index.css';

Raven.config('https://8a05d76ce781435e89d659fda1f59ac0@sentry.io/221103').install();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
