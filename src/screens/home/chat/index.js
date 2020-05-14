import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Chat from './Chat';
import ProfileDetails from './ProfileDetails';
import IncreasedPhoto from './IncreasedPhoto';

const Stack = createStackNavigator();

const StackChat = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name={'Chat'} component={Chat} />
    <Stack.Screen name={'ProfileDetails'} component={ProfileDetails} />
    <Stack.Screen name={'IncreasedPhoto'} component={IncreasedPhoto} />
  </Stack.Navigator>
);

export default StackChat;
