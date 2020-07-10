import React from 'react';
import NavbarAll from '../Components/navbar';
import ReservationForm from '../Components/ReservationForm';
// import FeaturedRooms from '../Components/FeaturedRooms'

function Reservation() {
  return (
    <React.Fragment>
      <NavbarAll/>
      <ReservationForm/>
    </React.Fragment>
  );
}

export default Reservation;
