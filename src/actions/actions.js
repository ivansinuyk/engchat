import {SIGN_IN_SUCCESS, LOGOUT, SIGN_ERROR, SIGN_LOADING} from './actionTypes';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

export const SignIn = (uid) => (dispatch) => {
  dispatch({
    type: SIGN_IN_SUCCESS,
    payload: uid,
  });
};

export const SignOn = (nick, phone, uid, upload) => (dispatch) => {
  dispatch({
    type: SIGN_LOADING,
  });
  firestore()
    .collection('users')
    .where('nick', '==', nick)
    .get()
    .then((snapshot) => {
      if (snapshot.size) {
        dispatch({
          type: SIGN_ERROR,
          payload: 'already',
        });
      } else {
        const referenceStorage = storage().ref(`users/avatars/${uid}`);
        const task = referenceStorage.putFile(upload);
        task.then(async () => {
          const avatar = await referenceStorage.getDownloadURL();
          firestore()
            .collection('users')
            .doc(uid)
            .set({
              nick: nick,
              phone: phone,
              lastseen: Date.now(),
              grade: 0,
              avatar: [avatar],
            })
            .then(() => {
              dispatch({
                type: SIGN_IN_SUCCESS,
                payload: uid,
              });
            });
        });
      }
    });
};

export const LogOut = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};
