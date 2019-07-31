import React from 'react';
import { ActivityIndicator, AsyncStorage, StatusBar, StyleSheet, View, Button } from 'react-native';
import Logo from '../components/Logo';

class OnBoarding extends React.Component {
  static navigationOptions = {
    // headerTitle: <Logo />,
    title: 'Im the onBoarding',
  };

  render() {
    return (
      <View>
        <Button title="Complete This OnBoarding" onPress={this._showMoreApp} />
        <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
      </View>
    );
  }

  _showMoreApp = async () => {
    await AsyncStorage.setItem('onBoarding', 'wow');
    this.props.navigation.navigate('Home');
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
}
export default OnBoarding;
