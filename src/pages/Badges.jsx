import React from 'react';

import '../components/styles/Badges.css';
import Navbar from '../components/Navbar';

class Badges extends React.Component{
  render(){
    return (
      <div>
        <Navbar />

        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img className="Badges_conf-logo" src="https://www.gravatar.com/avatar?d=identicon" alt="Logo"/>
            </div>
          </div>
        </div>

        <div className="Badge__container">
          <div className="Badges__buttons">
            <a href="/badges/new" className="btn btn.primary">New Badges</a>
          </div>
        </div>
      </div>
    )
  }
}
export default Badges;