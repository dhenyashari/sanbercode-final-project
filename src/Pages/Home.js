import React, {useEffect} from 'react';
import Jumbotron from '../Components/jumbotron';
import Banner from "../Components/banner";
// import ExampleContent from "../Components/ExampleContent";
import Services from "../Components/Services";
import FeaturedRooms from "../Components/FeaturedRooms";

function App() {
  return (
    <React.Fragment>
      <Jumbotron>
        <Banner title="luxurious rooms" subtitle="deluxe rooms starting at $299">
        </Banner>
      </Jumbotron>
      <Services/>
      <FeaturedRooms/>
    </React.Fragment>
  );
}

export default App;
