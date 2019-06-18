import React from 'react';
import './styles/Badge.css';

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img className="rounded-circle" src="https://dummyimage.com/64x64/fff/000" alt="Logo"/>
        </div>
        <div className="Badge__section-name">
          <img className="Badge__avatar" src={this.props.avatar} alt="Avatar"/>
          <h1>
            {this.props.firstName} <br/> {this.props.lastName}
          </h1>
        </div>
        <div className="Badge__section-info">
          <p>{this.props.jobTitle}</p>
        </div>
        <div className="Badge__footer">
          {this.props.country}
        </div>
      </div>
    );
  }
}

export default Badge;