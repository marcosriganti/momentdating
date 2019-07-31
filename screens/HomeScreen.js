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
        <Button title="Show me more of the app" onPress={this._showMoreApp} />
        <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
      </View>
    );
  }

  _showMoreApp = () => {
    this.props.navigation.navigate('Other');
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
}
export default HomeScreen;
