import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import './global.css';
import Badge from './components/Badge.jsx';

const container = document.getElementById('root')
ReactDOM.render(
  <Badge 
    firstName="Gian" 
    lastName="Pumayalla" 
    avatar="https://media.licdn.com/dms/image/C4E03AQHt7VrSl95qng/profile-displayphoto-shrink_200_200/0?e=1566432000&v=beta&t=2b3JrV9OSjt-84_K6WiVRF4L5DMMYmoHRW2rCNWVUNo"
    jobTitle="Full Stack Developer" 
    country="Italy" />
    
    ,container
);

serviceWorker.unregister();
