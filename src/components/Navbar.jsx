import React from 'react';
import './styles/Navbar.css';

class Navbar extends React.Component{
  render(){
    return(
      <div className="Navbar">
        <div className="container-fluid">
          <a href="/" className="Navbar__brand">
            <img className="Navbar__brand-logo" src="https://www.gravatar.com/avatar?d=identicon" alt="Logo"/>
            <span className="font-weight-light">Badge</span>
          </a>
        </div>
      </div>
    )
  }
}
export default Navbar;