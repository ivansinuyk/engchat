import React from 'react';
import {Text} from 'react-native';
import {textBold} from '../resource/style';

export default ({children}) => <Text style={textBold}>{children}</Text>;
