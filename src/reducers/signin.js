import {
  LOGOUT,
  SIGN_IN_SUCCESS,
  SIGN_LOADING,
  SIGN_ERROR,
} from '../actions/actionTypes';

const initialState = {
  loading: false,
  isLogin: false,
  error: undefined,
  nick: undefined,
  phone: undefined,
  uid: undefined,
};

const signin = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        isLogin: true,
        uid: action.payload,
        loading: false,
      };
    case LOGOUT:
      return initialState;
    case SIGN_LOADING:
      return {...state, loading: true, error: undefined};
    case SIGN_ERROR:
      return {...state, error: action.payload, loading: false};
    default:
      return state;
  }
};

export default signin;
