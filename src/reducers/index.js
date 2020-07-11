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
  isConfirmed: false
};


const confirmation = (state = initialState, action) => {
  switch (action.type) {
      case 'CONFIRMED':
        return {...state, isConfirmed: true}
      default:
          return state;
  }
}

export default confirmation;

// import { combineReducers } from 'redux';
// import counter from './counter';
// export default combineReducers({ counter, textJoke})