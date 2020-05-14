import React, {useState} from 'react';
import {View, Button, Image, Text} from 'react-native';
import auth from '@react-native-firebase/auth';
import ImagePicker from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import {connect} from 'react-redux';

const options = {
  title: 'Select Avatar',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

const Settings = ({uid}) => {
  const [img, setImg] = useState(null);
  const [upload, setUpload] = useState('');
  const [bytes, setBytes] = useState(undefined);
  const [downUrl, setDownUrl] = useState(undefined);
  const uploadImage = () => {
    const referenceStorage = storage().ref(`users/avatars/${uid}`);
    const task = referenceStorage.putFile(upload);
    task.on('state_changed', (snapshot) => {
      setBytes((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
    });
    task.then(async (snapshot) => {
      const url = await referenceStorage.getDownloadURL();
      setDownUrl({uri: url});
    });
  };
  const pickImage = () => {
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {uri: response.uri};
        setImg(source);
        setUpload(response.path);
      }
    });
  };
  return (
    <View>
      <Button
        title={'logout'}
        onPress={() => {
          auth()
            .signOut()
            .then(() => console.log('logouted'));
        }}
      />
      <Image style={{height: 100, width: 100}} source={downUrl} />
      <Button title={'Pick image'} onPress={() => pickImage()} />
      {img && (
        <View>
          <Image
            style={{width: 200, height: 400, resizeMode: 'cover'}}
            source={img}
          />
          <Button title={'Upload image'} onPress={() => uploadImage()} />
          {bytes !== undefined && (
            <View
              style={{
                height: 5,
                backgroundColor: 'yellow',
                marginTop: 3,
                width: `${bytes}%`,
              }}
            />
          )}
        </View>
      )}
    </View>
  );
};

const mapState = (state) => {
  const {uid} = state.signin;
  return {
    uid,
  };
};

export default connect(mapState)(Settings);
