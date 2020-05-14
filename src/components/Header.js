import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import {header, headertext} from '../resource/style';
import {remA, remW} from '../resource/constants';

const Header = ({navigate, title, icon}) => (
  <View style={header}>
    <TouchableOpacity style={{marginRight: 30 * remW}} onPress={navigate}>
      <Icon size={25 * remA} name={icon} color={'#FFFFFF'} />
    </TouchableOpacity>
    <View style={{flex: 1}}>
      <Text style={headertext}>{title}</Text>
    </View>
  </View>
);

export default Header;
