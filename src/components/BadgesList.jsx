import React from 'react';

class BadgesList extends React.Component{
  
  render(){
    return (
      <ul className="list-unstyled">
        {this.props.badges.map((badge) =>{
          return(
            <li key={badge.id} className="d-flex py-3 px-3">
              <img className="rounded-circle" src={badge.avatar} alt="avatar"/>
              <div className="d-flex flex-column align-items-start justify-content-center ml-3">
                <p className="mb-0"> {badge.firstName} {badge.lastName} - <span className="text-lowercase text-secondary">{badge.email}</span></p>
                <p className="mb-0">{badge.jobTitle}</p>
              </div>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default BadgesList;