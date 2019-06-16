import React from 'react';

class BadgeForm extends React.Component{
  state = {
    firstName: '',
    lastName: '',
    email: '',
    jobTitle: '',
    country: ''
  };

  handleChange = (e) =>{
    this.setState({
      [e.target.name]: e.target.value,
    })
  }
  handleClick = (e) =>{
    console.log('Button was clicked');
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form was submitted')
    console.log(this.state);
  }
  render(){
    return(
      <div>
        <h1>New Attendant</h1>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="">First Name</label>
            <input 
              onChange={this.handleChange} 
              className="form-control" 
              type="text" 
              name="firstName" 
              value={this.state.firstName}
            />
          </div>

          <div className="form-group">
            <label htmlFor="">Last Name</label>
            <input 
              onChange={this.handleChange} 
              className="form-control" 
              type="text" 
              name="lastName" 
              value={this.state.lastName}
            />
          </div>

          <div className="form-group">
            <label htmlFor="">E-mail</label>
            <input 
              onChange={this.handleChange} 
              className="form-control" 
              type="email" 
              name="email" 
              value={this.state.email}
            />
          </div>

          <div className="form-group">
            <label htmlFor="">Job Title</label>
            <input 
              onChange={this.handleChange} 
              className="form-control" 
              type="text" 
              name="jobTitle" 
              value={this.state.jobTitle}
            />
          </div>

          <div className="form-group">
            <label htmlFor="">Country</label>
            <input 
              onChange={this.handleChange} 
              className="form-control" 
              type="text" 
              name="country" 
              value={this.state.country}
            />
          </div>


          <button onClick={this.handleClick} className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    )
  }
}
export default BadgeForm;