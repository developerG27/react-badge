import React from 'react';
import { Link } from 'react-router-dom';
import '../components/styles/Badges.css';
// import confLogo from '../images/badge-header.svg';
// import Navbar from '../components/Navbar';
import BadgesList from '../components/BadgesList';

import api from '../api';

class Badges extends React.Component {

  state = {
    loading: true,
    error: null,
    data: undefined
  };

  componentDidMount(){
    this.fetchData()    
  }

  fetchData = async () => {
    this.setState({loading: true, error: null})

    try{
      const data = await api.badges.list();
      this.setState({loading: false, data: data})
    } catch(error){
      this.setState({loading: false, error: error})
    }
  }

  render() {
    if(this.state.loading === true){
      return 'Loading..';
    }

    if(this.state.error){
      return `Error..${this.state.error.message}`;
    }

    return (
      <div>
        
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container p-0">
              <img
                className="Badges_conf-logo"
                src="https://dummyimage.com/1200x200/000/fff"
                alt="Conf Logo"
              />
            </div>
          </div>
        </div>

        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New Badge
            </Link>
          </div>

          <BadgesList badges={this.state.data} />
        </div>
      </div>
    );
  }
}

export default Badges;