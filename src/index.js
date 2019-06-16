import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

const element = (
  <div>
    <h1>Ciao, Sono developerG27</h1>
  </div>
);
const container = document.getElementById('root')


ReactDOM.render(element, container);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
