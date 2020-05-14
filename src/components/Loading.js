import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {blueColor} from '../resource/constants';
import {loadingStyle} from '../resource/style';

const Loading = () => (
  <View style={loadingStyle}>
    <ActivityIndicator size={'large'} color={blueColor} />
  </View>
);

export default Loading;
