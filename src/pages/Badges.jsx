import React from 'react';
import { Link } from 'react-router-dom';
import '../components/styles/Badges.css';
// import confLogo from '../images/badge-header.svg';
// import Navbar from '../components/Navbar';
import BadgesList from '../components/BadgesList';

class Badges extends React.Component {

  constructor(props){
    super(props);
    console.log('1.constructor()')

    this.state = {
      data: [],
    };
  }

  componentDidMount(){
    console.log('3.componentDidMount()')

    this.timeoutId = setTimeout(()=>{
      this.setState({
        data: [
          {
            id: '2de30c42-9deb-40fc-a41f-05e62b5939a7',
            firstName: 'Freda',
            lastName: 'Grady',
            email: 'Leann_Berge@gmail.com',
            jobTitle: 'Legacy Brand Director',
            avatar:
              'https://dummyimage.com/64x64/000/fff',
          },
          {
            id: 'd00d3614-101a-44ca-b6c2-0be075aeed3d',
            firstName: 'Major',
            lastName: 'Rodriguez',
            email: 'Ilene66@hotmail.com',
            jobTitle: 'Human Research Architect',
            avatar:
              'https://dummyimage.com/64x64/000/fff',
          },
          {
            id: '63c03386-33a2-4512-9ac1-354ad7bec5e9',
            firstName: 'Daphney',
            lastName: 'Torphy',
            email: 'Ron61@hotmail.com',
            jobTitle: 'National Markets Officer',
            avatar:
              'https://dummyimage.com/64x64/000/fff',
          },
        ],
      })
    },3000)

    
  }

  componentDidUpdate(prevProps, prevState){
    console.log('5.ComponentDidUpdate()');
    console.log({
      prevProps: prevProps, 
      prevState: prevState,
    });

    console.log({
      props: this.props, 
      state: this.state,
    });
  }

  componentWillUnmount(){
    console.log('6.ComponentWillUnmount');

    clearTimeout(this.timeoutId);
  }

  render() {
    console.log('2.render()')
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