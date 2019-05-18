import React, {Component} from 'react';
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';

import WeatherApi from '../../stores/cloud/Weather';

class WeatherDetail extends Component {

  static navigationOptions = {
    title: 'Weather',
  };

  constructor(props) {
    super(props);
    const {name} = this.props.navigation.state.params;
    this.state = {
      name,
      weather: null,
      loading: true,
    }
    this.weatherApi = new WeatherApi();
  }

  componentDidMount(){
    this.weatherApi.getWeatherByCity(this.state.name)
      .then(weather => {
        this.setState({weather, loading: false})
      })
      .catch(() => {

      });
  }

  _renderWeather () {
    const { weather } = this.state;
    if (weather) {
      const { tempC } = weather;
      return <Text style={styles.cityTemp}>{tempC}</Text>
    }
    return null;
  }
  
  _renderLoading () {
    return <ActivityIndicator size="small" color="grey" />
  }

  render () {
    const { name, loading} = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.cityText}>{name}</Text>
        {loading ? this._renderLoading() : this._renderWeather()}
      </View>
    );
  }
}

export default WeatherDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  cityText: { color: 'black', fontSize: 58, fontWeight: 'bold' },
  cityTemp: { color: 'black', fontSize: 30 },
});
