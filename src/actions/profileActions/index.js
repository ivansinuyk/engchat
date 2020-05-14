import {
  PROFILE_DATA,
  PROFILE_ERROR,
  PROFILE_LOADING,
  VIPE_PROFILE,
} from '../actionTypes';
import firestore from '@react-native-firebase/firestore';

export const getProfile = (uid) => (dispatch) => {
  dispatch({
    type: PROFILE_LOADING,
  });
  firestore()
    .collection('users')
    .doc(uid)
    .get()
    .then((snapshot) => {
      dispatch({
        type: PROFILE_DATA,
        payload: snapshot.data(),
      });
    });
};

export const vipeData = () => ({
  type: VIPE_PROFILE,
});
