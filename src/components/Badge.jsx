import React from 'react';
import './styles/Badge.css';

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src="https://www.gravatar.com/avatar?d=identicon" alt="Logo"/>
        </div>
        <div className="Badge__section-name">
          <img className="Badge__avatar" src="https://media.licdn.com/dms/image/C4E03AQHt7VrSl95qng/profile-displayphoto-shrink_200_200/0?e=1566432000&v=beta&t=2b3JrV9OSjt-84_K6WiVRF4L5DMMYmoHRW2rCNWVUNo" alt="Avatar"/>
          <h1>
            Gian <br/> Pumayalla
          </h1>
        </div>
        <div className="Badge__section-info">
          <p>Full Stack developer</p>
        </div>
        <div className="Badge__footer">
          #Italy
        </div>
      </div>
    );
  }
}

export default Badge;
