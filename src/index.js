import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import './global.css';

// import BadgeNew from './pages/BadgeNew';
import Badges from './pages/Badges';

const container = document.getElementById('root')
ReactDOM.render( <Badges /> , container);

serviceWorker.unregister();