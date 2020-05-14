import React, {Component} from 'react';
import {View, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {fetchUsers} from '../../../actions/usersAction';
import Header from '../../../components/Header';
import UsersList from '../../../components/UsersList';
import Loading from '../../../components/Loading';

class Users extends Component {
  componentDidMount() {
    const {fetchUsers} = this.props;
    fetchUsers();
  }
  render() {
    const {loading, data, navigation, fetchUsers} = this.props;
    return (
      <View style={{backgroundColor: '#FFFFFF', flex: 1}}>
        <Header
          navigate={() => navigation.toggleDrawer()}
          title={'Users'}
          icon={'menu'}
        />
        <FlatList
          onRefresh={() => fetchUsers()}
          refreshing={false}
          data={data}
          renderItem={({item}) => <UsersList item={item} navigation={navigation}/>}
          keyExtractor={(item) => item.nick}
        />
        {loading && <Loading />}
      </View>
    );
  }
}

const actionCreators = {
  fetchUsers,
};

const mapState = (state) => {
  const {data, loading} = state.users;
  return {
    data,
    loading,
  };
};

export default connect(mapState, actionCreators)(Users);
