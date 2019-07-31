import React from 'react';
import { AsyncStorage, StatusBar, StyleSheet, View, Button } from 'react-native';
import Logo from '../components/Logo';
import WelcomeLogo from '../components/WelcomeLogo';

class SignInScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <Logo />,
    // title: 'testing',
  };

  render() {
    return (
      <View>
        <WelcomeLogo />
        {/* Welcome png  */}
        {/* Continue with LinkedIn */}
        {/* Continue With Phone Number */}
        <Button title="Sign in!" onPress={this._signInAsync} />
      </View>
    );
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  };
}

export default SignInScreen;
