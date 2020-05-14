import {USERS_DATA, USERS_LOADING} from '../actionTypes';
import firestore from '@react-native-firebase/firestore';

export const fetchUsers = () => (dispatch) => {
  dispatch({
    type: USERS_LOADING,
  });
  firestore()
    .collection('users')
    .orderBy('grade', 'DESC')
    .get()
    .then((querySnapshot) => {
      const data = [];
      querySnapshot.forEach((snapshot) => data.push(snapshot.data()));
      dispatch({
        type: USERS_DATA,
        payload: data,
      });
    });
};
