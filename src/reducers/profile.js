import {
  PROFILE_DATA,
  PROFILE_LOADING,
  PROFILE_ERROR,
} from '../actions/actionTypes';

const initialState = {
  loading: false,
  error: undefined,
  profileData: undefined,
};

const profile = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE_LOADING:
      return {...state, loading: true};
    case PROFILE_ERROR:
      return {...state, loading: false, error: true};
    case PROFILE_DATA:
      return {...state, profileData: action.payload, loading: false};
    default:
      return state;
  }
};

export default profile;
