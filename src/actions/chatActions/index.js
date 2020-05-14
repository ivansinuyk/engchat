import {
  CHAT_LOADING,
  CHAT_ERROR,
  CHAT_DATA,
  CHAT_UNSUBSCRIBE,
  FILE_LOADING,
  PROFILE_CHAT_DATA,
  PROFILE_CHAT_LOADING,
} from '../actionTypes';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

export const getChat = (limit) => (dispatch) => {
  dispatch({
    type: CHAT_LOADING,
  });
  const unsubscribe = firestore()
    .collection('chat')
    .limit(limit)
    .orderBy('date', 'desc')
    .onSnapshot(
      (snapshotList) => {
        const newdata = [];
        snapshotList.forEach((item) => newdata.push(item.data()));
        dispatch({
          type: CHAT_DATA,
          payload: newdata,
        });
      },
      (e) => console.log(e),
    );
  dispatch({
    type: CHAT_UNSUBSCRIBE,
    payload: unsubscribe,
  });
};

export const sendMessage = (message, nick, messageType, extra) => (
  dispatch,
) => {
  const date = Date.now();
  let data;
  switch (messageType) {
    case 'default':
      data = {
        nick,
        message,
        date,
        messageType: messageType,
        edited: false,
      };
      break;
    case 'reply':
      data = {
        nick,
        message,
        date,
        messageType,
        edited: false,
        replyMessage:
          extra.messageType === 'image'
            ? 'Photo'
            : extra.messageType === 'sticker'
            ? 'Sticker'
            : extra.message,
        replyNick: extra.nick,
        replyImage: extra.image ? extra.image : false,
      };
      break;
    case 'sticker':
      data = {
        nick,
        date,
        messageType,
        sticker: extra,
      };
      break;
    case 'image':
      const referenceStorage = storage().ref(`chat/${date.toString()}`);
      const task = referenceStorage.putFile(extra);
      dispatch({
        type: FILE_LOADING,
        payload: true,
      });
      task.then(async () => {
        const image = await referenceStorage.getDownloadURL();
        data = {
          nick,
          date,
          messageType,
          image,
          message,
        };
        firestore()
          .collection('chat')
          .doc(date.toString())
          .set(data)
          .then(() => dispatch({type: FILE_LOADING, payload: false}));
      });

      break;
    default:
      console.log('Somethinh wrong');
  }
  messageType !== 'image' &&
    firestore()
      .collection('chat')
      .doc(date.toString())
      .set(data)
      .then(() => console.log('send'));
};

export const deleteMessage = (id, messageType) => (dispatch) => {
  if (messageType === 'image') {
    const referenceStorage = storage().ref(`chat/${id.toString()}`);
    referenceStorage.delete().then(() => {
      firestore()
        .collection('chat')
        .doc(id.toString())
        .delete()
        .then(() => console.log('okey'));
    });
  } else {
    firestore()
      .collection('chat')
      .doc(id.toString())
      .delete()
      .then(() => console.log('okey'));
  }
};

export const updateMessage = (id, message) => (dispatch) => {
  firestore()
    .collection('chat')
    .doc(id.toString())
    .update({
      message,
      edited: true,
    })
    .then(() => console.log('updated'));
};

export const fetchProfile = (nick) => (dispatch) => {
  dispatch({
    type: PROFILE_CHAT_LOADING,
  });
  firestore()
    .collection('users')
    .where('nick', '==', nick)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((snapshot) => {
        dispatch({
          type: PROFILE_CHAT_DATA,
          payload: snapshot.data(),
        });
      });
    });
};
