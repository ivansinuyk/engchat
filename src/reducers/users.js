import {USERS_DATA, USERS_LOADING} from '../actions/actionTypes';

const initialState = {
  loading: false,
  data: undefined,
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case USERS_LOADING:
      return {...state, loading: true};
    case USERS_DATA:
      return {...state, data: action.payload, loading: false};
    default:
      return state;
  }
};

export default users;
