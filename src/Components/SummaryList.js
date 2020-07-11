import React, {useState, useEffect} from 'react';
import {Alert, Button} from 'react-bootstrap'
import { connect,useDispatch,useSelector } from 'react-redux'
import { Link } from "react-router-dom";

function SummaryList(props) {

  const name          = useSelector(state => state.name);
  const phonenumber   = useSelector(state => state.phonenumber);
  const email         = useSelector(state => state.email);
  const durasi        = useSelector(state => state.durasi);
  const tanggalmasuk  = useSelector(state => state.tanggalmasuk);
  const tanggalkeluar = useSelector(state => state.tanggalkeluar);
  const alamat        = useSelector(state => state.alamat);
  const rooms         = useSelector(state => state.rooms);
  // const gender        = useSelector(state => state.gender);
  // const isOke         = useSelector(state => state.isOke);

  return (
    <div className='confirmation-box'>
      <Alert variant="success" >
        <Alert.Heading>Please Check Your Reservation Data</Alert.Heading>
        <p> {`Name: ${name}`} </p>
        <p> {`Phone Number: ${phonenumber}`} </p>
        <p> {`Email: ${email}`} </p>
        <p> {`Duration: ${durasi}`} </p>
        <p> {`Start From: ${tanggalmasuk}`} </p>
        <p> {`Until To: ${tanggalkeluar}`} </p>
        <p> {`Address: ${alamat}`} </p>
        <p> {`Room(s): ${rooms}`} </p>
        {/* <p> {`Has it To Confirm? ${isOke}`} </p> */}

        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => [window.location.reload(false), window.alert("Thank You.. Enjoy your trip")]} variant="outline-success">
            <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit'}}>Confirm</Link>
          </Button>
        </div>
      </Alert>
    </div>
  );
}

export default connect()(SummaryList);