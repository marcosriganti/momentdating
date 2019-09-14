import React from 'react';
import { ActivityIndicator, AsyncStorage, StatusBar, StyleSheet, View, Button } from 'react-native';
import Logo from '../components/Logo';

class HomeScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <Logo />,
  };

  render() {
    return (
      <View>
        <Button title="Back To the OnBoarding" onPress={this._showMoreApp} />
        <Button title="Back to Login Page" onPress={this._signOutAsync} />
      </View>
    );
  }

  _showMoreApp = async () => {
    await AsyncStorage.clear();
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('onBoarding');
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
}
export default HomeScreen;
