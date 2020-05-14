import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native';
import {SignOn} from '../../actions/actions';
import {connect} from 'react-redux';
import ImagePicker from 'react-native-image-picker';

const options = {
  title: 'Select Avatar',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

const defaultAvatar = require('../../resource/image/assets/defaultAvatar.png');

const Signon = ({navigation, SignOn, route, error, loading}) => {
  const [nick, setNick] = useState('');
  const [img, setImg] = useState(undefined);
  const [upload, setUpload] = useState(undefined);
  const {phone, uid} = route.params;
  const avatarUri = img ? img : defaultAvatar;

  const signUp = () => {
    if (
      nick.trim() &&
      nick.length > 3 &&
      nick.length < 15 &&
      upload &&
      !loading
    ) {
      SignOn(nick, phone, uid, upload);
    }
  };

  const pickImage = () => {
    ImagePicker.showImagePicker(options, (response) => {
      const source = {uri: response.uri};
      setImg(source);
      setUpload(response.path);
    });
  };

  return (
    <View style={{flex: 1, alignItems: 'center', backgroundColor: '#FFFFFF'}}>
      <Text style={{fontSize: 25, color: 'blue'}}>First time here</Text>
      {error === 'already' && (
        <Text style={{fontSize: 25, color: 'green'}}>
          This nick already exist. Try another one
        </Text>
      )}
      {loading && <ActivityIndicator size={'small'} color={'green'} />}
      <Text>Choose your profile photo</Text>
      <TouchableOpacity onPress={() => pickImage()}>
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: 'cover',
            borderRadius: 50,
          }}
          source={avatarUri}
        />
      </TouchableOpacity>
      <TextInput
        autoCapitalize={'none'}
        style={{
          width: 300,
          elevation: 2,
          backgroundColor: '#FFFFFF',
          borderRadius: 20,
          height: 40,
          marginTop: 15,
        }}
        placeholder={'Nickname'}
        value={nick}
        onChangeText={(value) => setNick(value)}
      />
      <TouchableOpacity
        style={{
          marginTop: 25,
          width: 300,
          height: 40,
          backgroundColor: '#16A068',
          borderRadius: 36,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => signUp()}>
        <Text>Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapState = (state) => {
  const {error, loading} = state.signin;
  return {
    error,
    loading,
  };
};

const actionCreators = {
  SignOn,
};

export default connect(mapState, actionCreators)(Signon);
