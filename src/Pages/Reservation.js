import React, {useEffect} from 'react';
import ReservationForm from '../Components/ReservationForm';
// import FeaturedRooms from '../Components/FeaturedRooms'

function Reservation() {

  useEffect(()=>{
    document.title = 'Reservation'
    return () => {document.title = 'Side View Travel';}
  })

  return (
    <React.Fragment>
      <ReservationForm/>
    </React.Fragment>
  );
}

export default Reservation;
