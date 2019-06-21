import React from 'react';
import { Link } from 'react-router-dom'

class BadgesList extends React.Component{
  
  render(){
    if(this.props.badges.length === 0){
      return (
        <div>
            <h3>Badge not found</h3>
            <Link className="btn btn-primary" to="/badges/new">
              Create new badge
            </Link>
        </div>
      )
    }
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