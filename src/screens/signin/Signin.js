import React, {Component} from 'react';
import {
  TextInput,
  View,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {LogOut, SignIn, IsLoginLoad} from '../../actions/actions';
import {connect} from 'react-redux';
import {
  texttermsstyle,
  input,
  button,
  buttontitle,
  titleview,
  mainview,
  inputview,
  inputblock,
  errorblock,
  errorstyle,
  title,
  termsstyle,
  inputconfirm,
  buttonconfirm,
  customswitchpointsign,
  customswitchsign,
  formatstyle,
  formattext,
} from '../../resource/style';

class Signin extends Component {
  state = {
    format: '+1',
    confirm: null,
    number: '',
    code: '',
    error: undefined,
    loading: false,
    term: false,
    termcolor: '#FFFFFF',
  };

  componentDidMount() {
    const {SignIn, LogOut, navigation} = this.props;
    auth().onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate('Load');
        firestore()
          .collection('users')
          .doc(`${user.uid}`)
          .get()
          .then((snapshot) => {
            if (snapshot.exists) {
              SignIn(user.uid);
            } else {
              navigation.navigate('Signon', {
                phone: user.phoneNumber,
                uid: user.uid,
              });
            }
          });
      } else {
        LogOut();
      }
    });
  }

  async signInWithPhoneNumber(phoneNumber) {
    const {route} = this.props;
    const {format, number, term} = this.state;
    const phoneformat = !route.params ? format : route.params.countrycode;
    if (!term) {
      this.setState((prev) => ({...prev, termcolor: '#C13F59'}));
    } else {
      const phone = phoneformat + number;
      if (phoneNumber.trim()) {
        if (phone.length < 11 || phone.length > 16) {
          this.setState((prev) => ({...prev, error: 'uncorrect'}));
        } else {
          this.setState((prev) => ({...prev, error: false, loading: true}));
          try {
            const confirmation = await auth().signInWithPhoneNumber(phone);
            this.setState((prev) => ({
              ...prev,
              loading: false,
              confirm: confirmation,
            }));
          } catch (e) {
            this.setState((prev) => ({
              ...prev,
              loading: false,
              error: 'uncorrect',
            }));
          }
        }
      }
    }
  }
  async confirmCode() {
    const {code, confirm} = this.state;
    if (code.trim()) {
      if (code.length === 6) {
        try {
          this.setState((prev) => ({...prev, loading: true}));
          await confirm.confirm(code);
        } catch (err) {
          this.setState((prev) => ({...prev, loading: false, error: 'code'}));
        }
      }
    }
  }
  render() {
    const {
      error,
      loading,
      number,
      code,
      format,
      confirm,
      term,
      termcolor,
    } = this.state;
    const {navigation, route} = this.props;
    const phoneformat = !route.params ? format : route.params.countrycode;
    return (
      <View style={mainview}>
        <View style={titleview}>
          <Text style={title}>EngChat</Text>
        </View>
        {!confirm ? (
          <View style={[inputblock, {justifyContent: 'space-between'}]}>
            <View>
              <View style={errorblock}>
                {error === 'uncorrect' && (
                  <Text style={errorstyle}>Uncorrect phone number!</Text>
                )}
                {error === 'network' && (
                  <Text style={errorstyle}>No internet connection!</Text>
                )}
              </View>
              <View style={inputview}>
                <TouchableOpacity
                  style={formatstyle}
                  onPress={() => navigation.navigate('Format')}>
                  <Text style={formattext}>{phoneformat}</Text>
                </TouchableOpacity>
                <TextInput
                  value={number}
                  style={input}
                  keyboardType={'numeric'}
                  placeholderTextColor={'#D4D5D5'}
                  placeholder={'Phone number'}
                  onChangeText={(text) =>
                    this.setState((prev) => ({
                      ...prev,
                      number: text,
                      error: false,
                    }))
                  }
                />
              </View>
              <View style={errorblock}>
                {loading && (
                  <ActivityIndicator size={'small'} color={'green'} />
                )}
              </View>
              <View
                style={{
                  borderRadius: 15,
                  backgroundColor: termcolor,
                  marginHorizontal: 5,
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  style={termsstyle}
                  onPress={() => navigation.navigate('Terms')}>
                  <Text style={texttermsstyle}>
                    {' '}
                    By clicking Sign in you agree to our{' '}
                    <Text style={{color: '#37D5AD'}}>Terms of Service</Text>
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    this.setState((prev) => ({
                      ...prev,
                      term: !term,
                      termcolor: '#FFFFFF',
                    }))
                  }
                  style={[
                    customswitchsign,
                    {
                      alignItems: term ? 'flex-end' : 'flex-start',
                      backgroundColor: term ? '#39D99E' : '#D4D5D5',
                    },
                  ]}>
                  <View style={customswitchpointsign} />
                </TouchableOpacity>
              </View>
            </View>

            <View>
              <TouchableOpacity
                style={button}
                onPress={() => this.signInWithPhoneNumber(number)}>
                <Text style={buttontitle}>SIGN IN</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View style={[inputblock, {alignItems: 'center'}]}>
            <View style={errorblock}>
              {error === 'code' && (
                <Text style={errorstyle}>Invalid code!</Text>
              )}
            </View>
            <TextInput
              style={inputconfirm}
              value={code}
              placeholder={'Enter the code from SMS'}
              keyboardType={'numeric'}
              onChangeText={(text) =>
                this.setState((prev) => ({
                  ...prev,
                  code: text,
                  error: false,
                }))
              }
            />
            <View style={errorblock}>
              {loading && <ActivityIndicator size={'small'} color={'green'} />}
            </View>
            <View>
              <TouchableOpacity
                style={buttonconfirm}
                onPress={() => this.confirmCode(code)}>
                <Text style={buttontitle}>CONFIRM</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    );
  }
}

const actionCreators = {
  SignIn,
  LogOut,
  IsLoginLoad,
};

export default connect(null, actionCreators)(Signin);
