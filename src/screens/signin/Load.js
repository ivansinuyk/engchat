import React, {Component} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {container} from '../../resource/style';

class Load extends Component {
  render() {
    return (
      <View style={[container, {justifyContent: 'center'}]}>
        <ActivityIndicator size={'large'} color={'green'} />
      </View>
    );
  }
}

export default Load;
