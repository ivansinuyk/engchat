import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Profile from './Profile';
import IncreasedPhoto from '../chat/IncreasedPhoto';

const Stack = createStackNavigator();

const StackProfile = () => (
    <Stack.Navigator headerMode="none">
        <Stack.Screen name={'Profile'} component={Profile} />
        <Stack.Screen name={'ProfileIncreasedPhoto'} component={IncreasedPhoto} />
    </Stack.Navigator>
);

export default StackProfile;
