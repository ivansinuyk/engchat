import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from './home';
import Load from './signin/Load';
import Signin from './signin/Signin';
import Terms from './signin/Terms';
import Format from './signin/Format';
import Signon from './signin/Signon';
import {connect} from 'react-redux';

const Stack = createStackNavigator();

const Main = ({isLogin}) => (
  <NavigationContainer>
    {!isLogin ? (
      <Stack.Navigator headerMode="none">
        <Stack.Screen name={'Sign'} component={Signin} />
        <Stack.Screen name={'Load'} component={Load} />
        <Stack.Screen name={'Terms'} component={Terms} />
        <Stack.Screen name={'Signon'} component={Signon} />
        <Stack.Screen name={'Format'} component={Format} />
      </Stack.Navigator>
    ) : (
      <Stack.Navigator headerMode="none">
        <Stack.Screen name={'Main'} component={Home} />
      </Stack.Navigator>
    )}
  </NavigationContainer>
);

const mapState = (state) => {
  const {isLogin} = state.signin;
  return {
    isLogin,
  };
};

export default connect(mapState)(Main);
