import React, {Component} from 'react';
import {StyleSheet, TextInput, View, Button, FlatList , Text, TouchableHighlight} from 'react-native';

import WeatherApi from '../../stores/cloud/Weather';

class Home extends Component {
  static navigationOptions = {
    title: 'Cities',
  };

  constructor(props) {
    super(props);
    this.weatherApi = new WeatherApi();
    this.state = {
      cities: this.weatherApi.getHistory(),
      isSearching: false,
    }
  }

  _onChangeText = text => {
    if (text.trim().length === 0) {
      this.setState({ cities: this.weatherApi.getHistory(), isSearching: false });
    } else {
      this._searchCity(text);
    }
  }

  _searchCity(city){
    this.setState({ isSearching: true });
    this.weatherApi.getCityList(city)
      .then(cities => {
        this.setState({cities})
      })
      .catch(() => {
        this.setState({cities: []})
      });
  }

  _navigateToWeatherDetails(name) {
    const { navigation } = this.props;
    navigation.navigate('WeatherDetail', { name });
  }

  _renderItem = ({item}) => {
    const city = item;
    return (
      <TouchableHighlight onPress={() => this._navigateToWeatherDetails(city)}>
        <View style={styles.itemContainer}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>{city}</Text>
        </View>
      </TouchableHighlight>
    );
  }

  render () {
    const { cities, isSearching } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <TextInput style={styles.textInput} placeholder={'Search City'} onChangeText={this._onChangeText} />
        </View>
        { !isSearching  &&
          <Text style={styles.historyTitle}>{'History'}</Text>
        }
        <FlatList
          data={cities}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  textInput: {
    paddingLeft: 10,
    height: 40,
    flex: 1,
    marginBottom: 20,
    borderColor: 'gray',
    borderWidth: 1
  },
  itemContainer: {
    backgroundColor: 'white',
    height: 40,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  searchContainer: {
    flexDirection: 'row',
    width: '100%',
    padding: 10
  },
  historyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    marginBottom: 10,
  }
});
