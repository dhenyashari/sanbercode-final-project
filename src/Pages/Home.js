import React from 'react';
import NavbarAll from '../Components/navbar';
import Jumbotron from '../Components/jumbotron';
import Banner from "../Components/banner";
// import ExampleContent from "../Components/ExampleContent";
import Services from "../Components/Services";
import FeaturedRooms from "../Components/FeaturedRooms";
// import {Button} from 'react-bootstrap'
// import './App.css';

function App() {
  return (
    <React.Fragment>
      <NavbarAll/>
      <Jumbotron>
        <Banner title="luxurious rooms" subtitle="deluxe rooms starting at $299">
            {/* <Link to="/rooms" className="btn-primary">our rooms</Link> */}
            {/* <Button className=''>OUR ROOMS</Button> */}
        </Banner>
      </Jumbotron>
      <Services/>
      <FeaturedRooms/>
    </React.Fragment>
  );
}

export default App;
