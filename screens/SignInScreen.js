import React from 'react';
import { AsyncStorage, StyleSheet, View, Text } from 'react-native';
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
  buttonWrapper: {
    padding: 15,
    alignItems: 'center',
    borderRadius: 15,
    marginVertical: 10,
    marginHorizontal: 40,
  },
});
class SignInScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <Logo />,
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
        }}
      >
        {/* Welcome png  */}
        <View
          style={{
            paddingVertical: 50,
          }}
        >
          <WelcomeLogo />
        </View>

        <View>
          {/* Continue with LinkedIn */}
          <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.buttonWrapper}>
            <Text onPress={this._signInAsync} style={styles.buttonText}>
              Sign In with LinkedIn
            </Text>
          </LinearGradient>
          {/* Continue With Phone Number */}
          <LinearGradient
            colors={['#73BBCC', '#55A1F8', '#ADE75C']}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 1 }}
            style={styles.buttonWrapper}
          >
            <Text onPress={this._signInAsync} style={styles.buttonText}>
              Sign In with Phone Number
            </Text>
          </LinearGradient>
        </View>
      </View>
    );
  }
  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('onBoarding');
  };
}

export default SignInScreen;
