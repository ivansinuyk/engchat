import {remW, remH, w, remA, blueColor, h} from '../../constants';

export const chatContainerStyle = {
  flex: 1,
  width: w,
};

export const backgroundImageStyle = {
  flex: 1,
  resizeMode: 'cover',
  paddingHorizontal: 5 * remW,
};

export const newDayStyle = {
  textAlign: 'center',
  fontSize: 16 * remA,
  fontWeight: 'bold',
};

export const inputChatContainer = {
  flexDirection: 'row',
  minHeight: 50 * remH,
  maxHeight: 150 * remH,
};

export const inputEditContainer = {
  flexDirection: 'row',
  height: 50 * remH,
  borderBottomWidth: 0.2,
  borderBottomColor: 'grey',
};

export const editTitleStyle = {
  color: blueColor,
  fontWeight: 'bold',
  fontSize: 15 * remA,
};

export const editMessageStyle = {
  fontSize: 15 * remA,
};

export const editTextContainer = {
  flex: 7,
  paddingLeft: 15 * remW,
  justifyContent: 'space-around',
};

export const textInputChat = {
  paddingLeft: 15 * remW,
  flex: 7,
  fontSize: 16 * remA,
};

export const sendBlockStyle = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: 'flex-end',
  paddingBottom: 11 * remH,
};

export const myMessageStyle = {
  marginLeft: 80 * remW,
  alignSelf: 'flex-end',
  borderRadius: 10,
};

export const otherMessageStyle = {
  marginRight: 80 * remW,
  alignSelf: 'flex-start',
  borderRadius: 10,
};

export const messageBlockStyle = {
  flex: 1,
  minHeight: 45 * remH,
  marginBottom: 6 * remH,
};

export const otherNickBlock = {
  paddingTop: 5 * remH,
  paddingHorizontal: 5 * remW,
};

export const otherNickText = {
  fontSize: 16 * remA,
  color: '#247d09',
  fontWeight: 'bold',
};

export const messageBlock = {
  justifyContent: 'center',
  paddingTop: 5 * remH,
  paddingHorizontal: 5 * remW,
};

export const messageTextStyle = {
  fontSize: 14 * remA,
};

export const messageDateBlock = {
  alignSelf: 'flex-end',
  paddingHorizontal: 4 * remW,
  paddingTop: 4 * remH,
};

export const dateBlockSticker = {
  backgroundColor: 'rgba(84, 91, 92, 0.2)',
  width: 40 * remW,
  alignItems: 'center',
  alignContent: 'center',
  borderRadius: 10,
  padding: 2 * remA,
  position: 'absolute',
  left: 85 * remW,
  top: 90 * remH,
};

export const dateBlockImage = {
  backgroundColor: 'rgba(84, 91, 92, 0.2)',
  width: 40 * remW,
  alignItems: 'center',
  alignContent: 'center',
  borderRadius: 10,
  padding: 2 * remA,
  position: 'absolute',
  left: 205 * remW,
  top: 315 * remH,
};

export const iconEditStyle = {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
};

export const replyBlockStyle = {
  marginTop: 7 * remH,
  marginHorizontal: 7 * remW,
  flexDirection: 'row',
};

export const replyLineStyle = {
  backgroundColor: '#247d09',
  width: 3 * remW,
  height: 40 * remH,
};

export const replyTextBlock = {
  paddingLeft: 7 * remW,
};

export const stickerStyle = {
  resizeMode: 'stretch',
  margin: 3 * remA,
  width: (w - 36 * remA) / 5,
  height: (w - 36 * remA) / 5,
};

export const stickerMessageStyle = {
  resizeMode: 'stretch',
  width: 125 * remW,
  height: 125 * remH,
};

export const stickerContainer = {
  padding: 3 * remA,
  backgroundColor: '#F7E5E1',
  width: w,
  height: 275 * remH,
};

export const imageContainer = {
  borderRadius: 8,
  margin: 2,
  height: h - h / 2.2,
  width: w - w / 3.2,
};

export const sendImageStyle = {
  borderRadius: 50,
  width: 40 * remW,
  height: 40 * remH,
};

export const iconSendImage = {
  position: 'absolute',
  left: 10 * remW,
  top: 7 * remH,
};

export const loadingImageStyle = {
  justifyContent: 'center',
};

export const modalItemStyle = {
  flexDirection: 'row',
  paddingLeft: 5 * remW,
  height: 60 * remH,
  alignItems: 'center',
}

export const modalItemText = {
  paddingLeft: 5 * remW,
  fontSize: 15 * remA,
}

export const modalContainer = {
  backgroundColor: '#FFFFFF',
  borderRadius: 10,
  width: 125 * remW,
  justifyContent: 'space-between'
}

export const modalBackgroundStyle = {
  position: 'absolute',
  left: 0,
  top: 0,
  height: h,
  width: w,
  backgroundColor: 'rgba(84, 91, 92, 0.4)',
};

export const replyImageStyle = {
  alignSelf: 'center',
  height: 40 * remH,
  width: 40 * remW,
  marginLeft: 5 * remW}
