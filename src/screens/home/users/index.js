import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Users from './Users';
import ProfileDetails from '../chat/ProfileDetails';
import IncreasedPhoto from '../chat/IncreasedPhoto';

const Stack = createStackNavigator();

const StackUsers = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name={'Users'} component={Users} />
    <Stack.Screen name={'UsersDetails'} component={ProfileDetails} />
    <Stack.Screen name={'UsersIncreasedPhoto'} component={IncreasedPhoto} />
  </Stack.Navigator>
);

export default StackUsers;
