import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles/Home.css';

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="container">
          <div className="row">
            <div className="Home__col col-12 col-md-4">

              <h1>Badge Management System</h1>
              <Link className="btn btn-primary" to="/badges">
                Start
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}