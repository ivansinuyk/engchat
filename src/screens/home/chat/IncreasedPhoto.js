import React, {Component} from 'react';
import {
    StatusBar,
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity,
    FlatList
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import moment from 'moment';
import {h, w} from '../../../resource/constants';

class IncreasedPhoto extends Component {
  state = {
    border: true,
  };

  render() {
    const {navigation, route} = this.props;
    const {border} = this.state;
    return (
      <View style={{flex: 1}}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'black',
            justifyContent: 'center',
            paddingLeft: 10,
          }}>
            <StatusBar backgroundColor={'#000000'} hidden={!border}/>
          {border && (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon size={35} color={'white'} name={'arrow-back'} />
            </TouchableOpacity>
          )}
        </View>
        <TouchableWithoutFeedback
            style={{flex: 9}}
          onPress={() => this.setState((prev) => ({...prev, border: !border}))}>
            <FlatList

            data={route.params.avatar}
            horizontal={true}
            renderItem={({item}) => <Image
                source={{uri: item}}
                style={{
                    flex: 9,
                    backgroundColor: 'black',
                    width: w,
                    height: h,
                    resizeMode: 'contain',
                }}
                keyExtractor={item => item.toString()}
            />}
            />
        </TouchableWithoutFeedback>

        <View
          style={{
            flex: 1,
            backgroundColor: 'black',
            justifyContent: 'center',
            paddingLeft: 10,
          }}>
          {border && (
            <View>
              <Text style={{color: 'white'}}>{route.params.nick}</Text>
              <Text style={{color: 'white'}}>
                {moment(route.params.date).format('DD.MM.YY H:mm')}
              </Text>
            </View>
          )}
        </View>
      </View>
    );
  }
}

export default IncreasedPhoto;
