import React, {Component} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import {fetchProfile} from '../../../actions/chatActions';
import {vipeData} from '../../../actions/profileActions';
import Loading from '../../../components/Loading';
import {container} from '../../../resource/style';
import Details from '../../../components/Details';

class ProfileDetails extends Component {
  componentDidMount() {
    const {fetchProfile, route} = this.props;
    const {nickDetails} = route.params;
    fetchProfile(nickDetails);
  }
  componentWillUnmount() {
    const {vipeData} = this.props;
    vipeData();
  }

  render() {
    const {navigation, profileData, profileLoading, route} = this.props;
    const {user} = route.params;
    return (
      <View style={container}>
        {profileLoading && <Loading />}
        {profileData && (
          <Details
            showIncrease={() =>
              navigation.navigate(
                `${user ? 'UsersIncreasedPhoto' : 'IncreasedPhoto'}`,
                {nick: profileData.nick, avatar: profileData.avatar},
              )
            }
            navigation={navigation}
            profileData={profileData}
          />
        )}
      </View>
    );
  }
}

const actionCreators = {
  fetchProfile,
  vipeData,
};

const mapState = (state) => {
  const {profileLoading, profileData} = state.chat;
  return {
    profileData,
    profileLoading,
  };
};

export default connect(mapState, actionCreators)(ProfileDetails);
