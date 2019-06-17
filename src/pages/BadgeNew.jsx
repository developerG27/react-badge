import React from 'react';
import Navbar from '../components/Navbar.jsx';
import '../components/styles/Badge.css';
import Badge from '../components/Badge.jsx';
import BadgeForm from '../components/BadgeForm.jsx';

class BadgeNew extends React.Component{
  state = {form:{
    firstName: '',
    lastName: '',
    email: '',
    jobTitle: '',
    country: '',
  } };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  }

  render(){
    return(
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img src="https://www.gravatar.com/avatar?d=identicon" alt="Logo" className="img-fluid"/>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge 
                firstName={this.state.form.firstName}
                lastName={this.state.form.lastName}
                avatar="https://www.gravatar.com/avatar?d=identicon" 
                jobTitle={this.state.form.jobTitle}
                country={this.state.form.country}
              />
            </div>

            <div className="col-6">
              <BadgeForm 
                onChange={this.handleChange}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BadgeNew;