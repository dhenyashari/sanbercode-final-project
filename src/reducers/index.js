const initialState = {
  name: '',
  phonenumber: '',
  email: '',
  durasi:'',
  tanggalmasuk:'',
  tanggalkeluar:'',
  alamat:'',
  rooms: [],
  gender:'',
  isOke: 'NOT YET'
}

const confirmation = (state = initialState, action) => {
  switch (action.type) {
      case 'UNCONFIRMED':
        state['name'] = action.newReservationState.name;
        state['phonenumber'] = action.newReservationState.phonenumber;
        state['email'] = action.newReservationState.email;
        state['durasi'] = action.newReservationState.durasi;
        state['tanggalmasuk'] = action.newReservationState.tanggalmasuk;
        state['tanggalkeluar'] = action.newReservationState.tanggalkeluar;
        state['alamat'] = action.newReservationState.alamat;
        state['rooms'] = action.newReservationState.rooms;
        state['gender'] = action.newReservationState.gender;
        state['isOke'] = 'NOT YET';
        console.log('ini UNCONFIRMED');
        // break;
      case 'CONFIRMED':
        state['isOke'] = 'OKE';
        console.log('ini confirmed');
        // break;
      default:
          return state;
  }
}

export default confirmation;



// const confirmation = (state = initialState, action) => {
//   if (action.type == 'ANCONFIRMED') {
//       state.name = action.newReservationState.name;
//       state.phonenumber = action.newReservationState.phonenumber;
//       state['email'] = action.newReservationState.email;
//       state['durasi'] = action.newReservationState.durasi;
//       state['tanggalmasuk'] = action.newReservationState.tanggalmasuk;
//       state['tanggalkeluar'] = action.newReservationState.tanggalkeluar;
//       state['alamat'] = action.newReservationState.alamat;
//       state['rooms'] = action.newReservationState.rooms;
//       state['gender'] = action.newReservationState.gender;
//       state['isOke'] = 'NOT YET';
//       console.log('ini UNCONFIRMED');
//       console.log(state);
//   } else if (action.type == 'CONFIRMED') {
//       state['isOke'] = 'OKE';
//       console.log('ini confirmed');
//   } else {
//     return state;
//   }
// }

// import { combineReducers } from 'redux';
// import confirmed from './confirmed';
// import unconfirmed from './unconfirmed';
// export default combineReducers({ confirmed, unconfirmed})