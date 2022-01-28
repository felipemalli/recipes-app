import { SEND_EMAIL } from '../actions';

const INITIAL_STATE = {
  email: '',
};

const login = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SEND_EMAIL:
    return action.payload;
  default:
    return state;
  }
};

export default login;
