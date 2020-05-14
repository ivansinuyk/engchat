import React from 'react';
import {View, Text, TouchableWithoutFeedback, Image} from 'react-native';
import moment from 'moment';
import {gradeLevel} from '../resource/scripts';

const UsersList = ({item, navigation}) => {
  const {avatar, nick, lastseen, grade} = item;
  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate('UsersDetails', {nickDetails: nick, user: true})}>
      <View
        style={{
          flex: 1,
          width: '100%',
          height: 75,
          backgroundColor: '#FFFFFF',
          marginBottom: 2,
          flexDirection: 'row',
            alignItems: 'center'
        }}>
        <View style={{paddingHorizontal: 10}}>
          <Image
            source={{uri: avatar}}
            style={{width: 55, height: 55, borderRadius: 50}}
          />
        </View>
        <View
          style={{
            flex: 1,
              alignItems: 'center',
            flexDirection: 'row',
              height: 75,
            justifyContent: 'space-between',
            borderBottomWidth: 0.18,
            borderBottomColor: 'grey',
          }}>
          <View >
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>{nick}</Text>
            <Text>{moment(lastseen).format('H:mm')}</Text>
          </View>
          <View style={{alignItems: 'center', marginRight: 15}}>
              <Text>{gradeLevel(grade)}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default UsersList;
