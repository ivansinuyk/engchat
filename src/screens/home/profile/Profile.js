import React, {Component} from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import Header from '../../../components/Header';
import {container} from '../../../resource/style';
import {connect} from 'react-redux';
import {getProfile} from '../../../actions/profileActions';
import {gradeLevel} from '../../../resource/scripts';
import Loading from '../../../components/Loading';
import Details from '../../../components/Details';

class Profile extends Component {
  componentDidMount() {
    const {getProfile, uid} = this.props;
    getProfile(uid);
  }

  render() {
    const {navigation, error, loading, profileData} = this.props;
    return (
      <View style={container}>
        {loading && <Loading />}
        {profileData && (
          <Details
            myProfile={true}
            profileData={profileData}
            showIncrease={() =>
              navigation.navigate('ProfileIncreasedPhoto', {
                nick: profileData.nick,
                avatar: profileData.avatar,
              })
            }
            navigation={navigation}
          />
        )}
      </View>
    );
  }
}

const actionsCreators = {
  getProfile,
};

const mapState = (state) => {
  const {profileData, error, loading} = state.profile;
  const {uid} = state.signin;
  return {
    uid,
    profileData,
    error,
    loading,
  };
};

export default connect(mapState, actionsCreators)(Profile);
