import {remW, remH, w, blueColor, remA, h} from '../../constants';

export const imageDetailsStyle = {
  width: w,
  height: 350 * remH,
  resizeMode: 'contain',
  justifyContent: 'space-between',
};

export const detailsBackStyle = {
  backgroundColor: 'rgba(84, 91, 92, 0.12)',
  paddingLeft: 15 * remW,
  height: 55 * remH,
  paddingVertical: 15 * remH,
};

export const detailsNickContainer = {
  backgroundColor: 'rgba(84, 91, 92, 0.12)',
  paddingLeft: 15 * remW,
  paddingBottom: 15 * remH,
  height: 55 * remH,
};

export const detailNickStyle = {
  color: '#FFFFFF',
  fontSize: 24 * remA,
  fontWeight: 'bold',
};

export const detailLastSeenStyle = {
  color: '#FFFFFF',
  fontSize: 13 * remA,
};

export const detailInfoContainer = {
  paddingLeft: 15 * remW,
};

export const detailInfoStyle = {
  color: blueColor,
  paddingVertical: 15 * remH,
  fontWeight: 'bold',
};

export const detailGradePhoneStyle = {
  color: '#000000',
  fontSize: 16 * remA,
};

export const detailMobileStyle = {
  color: 'grey',
  paddingBottom: 15 * remH,
  fontSize: 12 * remA,
};

export const detailGradeStyle = {
  color: 'grey',
  fontSize: 12 * remA,
};

export const detailDialogStyle = {
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: 320 * remH,
  left: 280 * remW,
  width: 60 * remW,
  height: 60 * remH,
  backgroundColor: '#FFFFFF',
  borderRadius: 50,
  elevation: 3,
};
