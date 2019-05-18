import React, {Component} from 'react';
import {StyleSheet, TextInput, View, Button} from 'react-native';

class SignIn extends Component {

  static navigationOptions = {
    title: 'SignIn',
  };

  _onSignInClick = () => {
    this.props.navigation.navigate('Home', { name: 'Jane' });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.textInput} placeholder={'username'}/>
        <TextInput style={styles.textInput} placeholder={'password'} />
        <Button  onPress={this._onSignInClick}
          title="Press Me"/> 
      </View>
    );
  }
}

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  textInput: {
    paddingLeft: 10,
    height: 40,
    width: 150,
    marginBottom: 20,
    borderColor: 'gray',
    borderWidth: 1
  }
});
