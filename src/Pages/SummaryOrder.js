import React, {useEffect} from 'react';
import SummaryList from '../Components/SummaryList';

function Reservation() {

  useEffect(()=>{
    document.title = 'Confirmation Order'
    return () => {document.title = 'Side View Travel';}
  })

  return (
    <React.Fragment>
      <SummaryList/>
    </React.Fragment>
  );
}

export default Reservation;