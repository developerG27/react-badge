import React from 'react';

class Badge extends React.Component {
  render() {
    return (
      <div>
        <div>
          <img src="https://www.gravatar.com/avatar?d=identicon" alt="Logo"/>
        </div>
        <div>
          <img src="https://www.gravatar.com/avatar?d=identicon" alt="Avatar"/>
          <h1>
            Gian <br/> Pumayalla
          </h1>
        </div>
        <div>
          <p>Full Stack developer</p>
        </div>
      </div>
    );
  }
}

export default Badge;
