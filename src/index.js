import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import './global.css';

import BadgeNew from './pages/BadgeNew';

const container = document.getElementById('root')
ReactDOM.render(
  <BadgeNew 
    
  />
  ,
  container
);

serviceWorker.unregister();
