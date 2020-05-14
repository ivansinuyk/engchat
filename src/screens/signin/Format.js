import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import SearchIcon from 'react-native-vector-icons/AntDesign';
import {countryCodes} from '../../resource/constants/CountryCodes';
import {
  header,
  headertext,
  inputsearch,
  countrylist,
  textstyle,
  tabtext,
} from '../../resource/style';

const Format = ({navigation}) => {
  const [search, setSearch] = useState(false);
  const [country, setCountry] = useState('');
  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <View style={header}>
        <TouchableOpacity
          style={{marginRight: 15}}
          onPress={() => navigation.goBack()}>
          <Icon size={40} name={'chevron-thin-left'} color={'#37D5AD'} />
        </TouchableOpacity>
        {search ? (
          <TextInput
            autoFocus={true}
            value={country}
            style={inputsearch}
            autoCapitalize={'words'}
            placeholderTextColor={'#D4D5D5'}
            placeholder={'Search'}
            onChangeText={(text) => setCountry(text)}
          />
        ) : (
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={headertext}>Choose your country</Text>
            <SearchIcon
              onPress={() => setSearch(true)}
              name={'search1'}
              size={40}
              color={'#37D5AD'}
            />
          </View>
        )}
      </View>
      <FlatList
        initialNumToRender={50}
        data={countryCodes.filter((item) =>
          item.name.toLowerCase().startsWith(country.toLowerCase()),
        )}
        renderItem={({item}) => {
          const name =
            item.name.length > 25
              ? item.name.substring(0, 25 - 3) + '...'
              : item.name;
          return (
            <TouchableOpacity
              style={countrylist}
              onPress={() =>
                navigation.navigate('Sign', {countrycode: item.dial_code})
              }>
              <Text style={textstyle}>{name}</Text>
              <Text style={tabtext}>{item.dial_code}</Text>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};

export default Format;
