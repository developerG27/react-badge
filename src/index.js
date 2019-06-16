import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Badge from './components/Badge.jsx';

const container = document.getElementById('root')
ReactDOM.render(<Badge />, container);

serviceWorker.unregister();
