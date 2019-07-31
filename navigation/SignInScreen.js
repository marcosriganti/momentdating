import React from 'react';
import { AsyncStorage, StatusBar, StyleSheet, View, Button, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// Local Components
import Logo from '../components/Logo';
import WelcomeLogo from '../components/WelcomeLogo';

const styles = StyleSheet.create({
  buttonText: {
    backgroundColor: 'transparent',
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
  },
});
class SignInScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <Logo />,
  };

  render() {
    return (
      <View>
        {/* Welcome png  */}
        <WelcomeLogo />
        {/* Continue with LinkedIn */}
        <LinearGradient
          colors={['#4c669f', '#3b5998', '#192f6a']}
          style={{ padding: 15, alignItems: 'center', borderRadius: 5 }}
        >
          <Text onPress={this._signInAsync} style={styles.buttonText}>
            Sign in with Facebook
          </Text>
        </LinearGradient>
        {/* Continue With Phone Number */}
        <LinearGradient
          colors={['#73BBCC', '#55A1F8', '#ADE75C']}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 1 }}
          style={{ padding: 15, alignItems: 'center', borderRadius: 5 }}
        >
          <Text onPress={this._signInAsync} style={styles.buttonText}>
            Sign in with Facebook
          </Text>
        </LinearGradient>
      </View>
    );
  }
  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  };
}

export default SignInScreen;
