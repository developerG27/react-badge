import React from 'react';
import Navbar from '../components/Navbar.jsx';
import '../components/styles/Badge.css';
import Badge from '../components/Badge.jsx';

class BadgeNew extends React.Component{
  render(){
    return(
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img src="https://www.gravatar.com/avatar?d=identicon" alt="Logo" className="img-fluid"/>
        </div>

        <div className="container">
          <div className="row">
            <div className="col">
              <Badge 
                firstName="Gian" 
                lastName="Pumayalla" 
                avatar="https://www.gravatar.com/avatar?d=identicon" 
                jobTitle="Full Stack Developer" 
                country="Italy" 
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BadgeNew;