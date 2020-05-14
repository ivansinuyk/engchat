import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Settings from './settings/Settings';
import StackUsers from './users';
import English from './english/TestsList';
import {remW, w, remA} from '../../resource/constants';
import {
  drawerstyle,
  draweritemtext,
  iconDrawerStyle,
} from '../../resource/style';
import IconSettings from 'react-native-vector-icons/MaterialIcons';
import IconContacts from 'react-native-vector-icons/FontAwesome5';
import StackChat from './chat';
import StackProfile from './profile';

const Drawer = createDrawerNavigator();

export default function Home() {
  return (
    <Drawer.Navigator
      backBehavior={'history'}
      initialRouteName="Profile"
      drawerStyle={drawerstyle}
      edgeWidth={w}
      drawerContentOptions={{
        labelStyle: draweritemtext,
        activeBackgroundColor: '#FFFFFF',
        itemStyle: {
          width: w * remW,
        },
      }}>
      <Drawer.Screen
        options={{
          drawerIcon: ({focused}) => (
            <IconContacts
              style={iconDrawerStyle}
              size={20 * remA}
              name={'user-alt'}
              color={'grey'}
            />
          ),
        }}
        name="Profile"
        component={StackProfile}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({focused}) => (
            <IconContacts
              style={iconDrawerStyle}
              size={20 * remA}
              name={'rocketchat'}
              color={'grey'}
            />
          ),
        }}
        name="Chat"
        component={StackChat}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({focused}) => (
            <IconContacts
              style={iconDrawerStyle}
              size={20 * remA}
              name={'american-sign-language-interpreting'}
              color={'grey'}
            />
          ),
        }}
        name="English"
        component={English}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({focused}) => (
            <IconContacts
              style={iconDrawerStyle}
              size={20 * remA}
              name={'users'}
              color={'grey'}
            />
          ),
        }}
        name="Users"
        component={StackUsers}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({focused}) => (
            <IconSettings
              style={iconDrawerStyle}
              size={24 * remA}
              name={'settings'}
              color={'grey'}
            />
          ),
        }}
        name="Settings"
        component={Settings}
      />
    </Drawer.Navigator>
  );
}
