import {combineReducers} from 'redux';
import signin from './signin';
import profile from './profile';
import chat from './chat';
import users from './users';

export default combineReducers({
  signin,
  profile,
  chat,
  users,
});
