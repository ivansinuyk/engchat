import React from 'react';
import {
  View,
  TouchableWithoutFeedback,
  ImageBackground,
  TouchableOpacity,
  Text,
} from 'react-native';
import {remA, remW} from '../resource/constants';
import Icon from 'react-native-vector-icons/Ionicons';
import IconMessage from 'react-native-vector-icons/AntDesign';
import moment from 'moment';
import {gradeLevel, parsePhone} from '../resource/scripts';
import {
  detailDialogStyle,
  detailGradePhoneStyle,
  detailGradeStyle,
  detailInfoContainer,
  detailInfoStyle,
  detailLastSeenStyle,
  detailMobileStyle,
  detailNickStyle,
  detailsBackStyle,
  detailsNickContainer,
  imageDetailsStyle,
} from '../resource/style/profile';
import {headertext} from '../resource/style';

const Details = ({
  myProfile,
  showIncrease,
  navigation,
  profileData: {avatar, nick, lastseen, phone, grade},
}) => (
  <View>
    <TouchableWithoutFeedback onPress={showIncrease}>
      <ImageBackground source={{uri: avatar[0]}} style={imageDetailsStyle}>
        <View
          style={[
            detailsBackStyle,
            {flexDirection: myProfile ? 'row' : 'column'},
          ]}>
          <TouchableOpacity
            onPress={() =>
              myProfile ? navigation.toggleDrawer() : navigation.goBack()
            }>
            <Icon
              size={25 * remA}
              name={myProfile ? 'md-menu' : 'md-arrow-round-back'}
              color={'#FFFFFF'}
            />
          </TouchableOpacity>
          {myProfile && (
            <Text style={[headertext, {paddingLeft: 30 * remW}]}>Profile</Text>
          )}
        </View>

        <View style={detailsNickContainer}>
          <Text style={detailNickStyle}>{nick}</Text>
          <Text style={detailLastSeenStyle}>
            {moment(lastseen).format('DD.MM.YY H:mm')}
          </Text>
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
    <View style={detailInfoContainer}>
      <Text style={detailInfoStyle}>Info</Text>
      <Text style={detailGradePhoneStyle}>{parsePhone(phone)}</Text>
      <Text style={detailMobileStyle}>Mobile</Text>
      <Text style={detailGradePhoneStyle}>{gradeLevel(grade)}</Text>
      <Text style={detailGradeStyle}>English level</Text>
    </View>
    {!myProfile && (
      <View style={detailDialogStyle}>
        <TouchableWithoutFeedback onPress={() => alert('in dev...')}>
          <IconMessage name={'message1'} size={25 * remA} color={'grey'} />
        </TouchableWithoutFeedback>
      </View>
    )}
  </View>
);

export default Details;
