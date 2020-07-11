import React from 'react'
import ListCheck from './ListCheck'
import ListOption from './ListOption'
import {Button} from 'react-bootstrap'
import {connect} from 'react-redux'
import { Link } from "react-router-dom";

class ReservationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phonenumber: '',
      email: '',
      durasi:'',
      tanggalmasuk:'',
      tanggalkeluar:'',
      alamat:'',
      rooms: [],
      gender:'',
      // isOke:false,
      genders:[
        {id: 'male', value: "Male", isChecked: false},
        {id: 'female', value: "Female", isChecked: false},
        {id: 'others', value: "Others", isChecked: false}
      ],
      listrooms: [
        {id: 1, value: "Double Deluxe", isChecked: false},
        {id: 2, value: "Family Deluxe", isChecked: false},
        {id: 3, value: "Presidential", isChecked: false},
      ]
    };

    this.handleChangeRadio = this.handleChangeRadio.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheckElement = this.handleCheckElement.bind(this);
  }

  handleChangeRadio=(event)=> {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
    console.log(event.target.value);
  };

  handleCheckElement = (event) => {
    let rooms = [...this.state.rooms]
    let idx = rooms.findIndex(elemen => event.target.value === elemen)
    if (idx>0){
      rooms = [...rooms.slice(0,idx),...rooms.slice(idx+1, rooms.length)]
    } else if(idx===0){
      rooms = [...rooms.slice(0,idx),...rooms.slice(idx+1, rooms.length)]
    } else{
      rooms.push(event.target.value)
    }
    this.state.listrooms.forEach(listrooms => {
       if (listrooms.value === event.target.value)
       listrooms.isChecked =  event.target.checked
    })
    this.setState({rooms})
    console.log(rooms);
  }

  handleChange(event) {
    const {name, value} = event.target;
    this.setState({ [name]: value});
    // console.log(event.target)
  }

  handleSubmit(event) {
    event.preventDefault();
    const newReservationState = {
      name: this.state.name,
      phonenumber: this.state.phonenumber,
      email: this.state.email,
      durasi: this.state.durasi,
      tanggalmasuk: this.state.tanggalmasuk,
      tanggalkeluar: this.state.tanggalkeluar,
      alamat: this.state.alamat,
      rooms: this.state.rooms,
      gender: this.state.gender,
      // isOke: this.state.isOke,
    }
    this.props._handleSubmit(newReservationState)
    // console.log(newReservationState)

    // grabDataForm();
    console.log(`nama ku ${this.state.name} reservasi kamar ${this.state.rooms} nomer hapeku ${this.state.phonenumber} emailku di ${this.state.email} menginap selama ${this.state.durasi} mulai tanggal ${this.state.tanggalmasuk} hingga tanggal ${this.state.tanggalkeluar} jenis kelamin ${this.state.gender} alamat ku di ${this.state.alamat}`)
  }

  render() {
    const{name, phonenumber, email, durasi, tanggalmasuk, tanggalkeluar, alamat, gender, rooms} = this.state;
    return (
      <div className='reservation-form'>
        <form id="FormCuti">
          <h1>Welcome to Reservation Form</h1>
          {/* <h2>we find new cruise to you who bored routine job</h2> */}
          <p>Please fill registration form below.</p>
          <div name={rooms} className="form-rooms">
            <ListCheck items={this.state.listrooms} eventHandler={this.handleCheckElement}/>
          </div>
          <label>
          Name:
          <br />
          <input type="text" name="name" onChange={this.handleChange} value={name} placeholder="please enter your name here..."/>
          </label>
          <br />
          <label>
          Phone Number:
          <br />
          <input type="text" name="phonenumber" onChange={this.handleChange} value={phonenumber} placeholder="please enter phone number..."/>
          </label>
          <br />
          <label>
          Email:
          <br />
          <input type="text" name="email" onChange={this.handleChange} value={email} placeholder="please enter your email here..."/>
          </label>
          <br />
          <label>
          Duration:
          <br />
          <input type="number" name="durasi" onChange={this.handleChange} value={durasi} placeholder="how many night(s)...."/>
          </label>
          <br />
          <label>
          Start From:
          <br />
          <input type="date" name="tanggalmasuk" onChange={this.handleChange} value={tanggalmasuk}/>
          </label>
          <br />
          <label>
          Until To:
          <br />
          <input type="date" name="tanggalkeluar" onChange={this.handleChange} value={tanggalkeluar}/>
          </label>
          <br />
          <div name={gender} className="form-skills">
            <ListOption items={this.state.genders} eventHandler={this.handleChangeRadio}/>
          </div>
          <br />
          <label>
          Address:
          <br />
          <textarea type="textarea" name="alamat" onChange={this.handleChange} value={alamat} placeholder="where you living..."/>
          </label>
          <br />
          
          <Button onClick={this.handleSubmit} variant="danger"><Link to="/order" style={{ color: 'inherit', textDecoration: 'inherit'}}>Kirim</Link></Button>
          
        </form>
      </div>
    );
  }
}

// const mapStateToProp = state => ({
//   name: state.name,
//   phonenumber: state.phonenumber,
//   email: state.email,
//   durasi: state.durasi,
//   tanggalmasuk: state.tanggalmasuk,
//   tanggalkeluar: state.tanggalkeluar,
//   alamat: state.alamat,
//   rooms: state.alamat,
//   gender: state.alamat,
// })

const mapDispatchToProp = dispatch => ({
  _handleSubmit: (newReservationState) => dispatch({type: 'UNCONFIRMED', newReservationState})
})

export default connect(null,mapDispatchToProp)(ReservationForm);