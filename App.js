import React, {Component} from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import SignIn from './app/screens/SignIn';
import Home from './app/screens/Home';
import WeatherDetail from './app/screens/WeatherDetail';

const MainNavigator = createStackNavigator({
  SignIn: {screen: SignIn},
  Home: {screen: Home},
  WeatherDetail: {screen: WeatherDetail},
}, {
  initialRouteName: "Home"
});

const AppNavigation = createAppContainer(MainNavigator);

 class App extends Component {
  render() {
    return (
      <AppNavigation />
    );
  }
 }

export default App;

