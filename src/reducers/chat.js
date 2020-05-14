import {
  CHAT_DATA,
  CHAT_ERROR,
  CHAT_LOADING,
  CHAT_UNSUBSCRIBE,
  FILE_LOADING, PROFILE_CHAT_DATA,
  PROFILE_CHAT_LOADING, VIPE_PROFILE,
} from '../actions/actionTypes';

const initialState = {
  loading: false,
  error: undefined,
  chatData: [],
  unsubscribe: undefined,
  fileLoading: false,
  profileData: undefined,
  profileLoading: false,
};

const chat = (state = initialState, action) => {
  switch (action.type) {
    case CHAT_LOADING:
      return {...state, loading: true};
    case CHAT_ERROR:
      return {...state, loading: false, error: true};
    case CHAT_UNSUBSCRIBE:
      return {...state, unsubscribe: action.payload};
    case CHAT_DATA:
      return {...state, chatData: action.payload, loading: false};
    case FILE_LOADING:
      return {...state, fileLoading: action.payload};
    case VIPE_PROFILE:
      return {...state, profileData: undefined};
    case PROFILE_CHAT_LOADING:
      return {...state, profileLoading: true};
    case PROFILE_CHAT_DATA:
      return {...state, profileLoading: false, profileData: action.payload};
    default:
      return state;
  }
};

export default chat;
