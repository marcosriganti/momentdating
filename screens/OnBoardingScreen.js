import React from 'react';
import { ActivityIndicator, AsyncStorage, StatusBar, StyleSheet, View, Button, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
// Local
import Logo from '../components/Logo';
import Colors from '../constants/Colors';
import Common from '../styles/Common';
const onBoardingStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    paddingVertical: 40,
    alignContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.darkColor,
    textAlign: 'center',
    marginBottom: 10,
  },
  help: {
    color: Colors.darkColor,
    textAlign: 'center',
    fontSize: 14,
  },
});
class OnBoarding extends React.Component {
  static navigationOptions = {
    headerTitle: <Logo />,
  };

  render() {
    return (
      <View style={onBoardingStyles.container}>
        <View style={{ flex: 1 }}>
          <Text style={onBoardingStyles.title}>What's Your Preferred Name?</Text>
          <Text style={onBoardingStyles.help}>
            Your name will be revelead only to the people when you get matched with.
          </Text>
        </View>

        <View
          style={[
            Common.centerVertical,
            {
              flex: 2,
              backgroundColor: 'red',
            },
          ]}
        >
          <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
        </View>
        {/* <Button title="Complete This OnBoarding" onPress={this._showMoreApp} /> */}
        <View style={[{ flex: 1, backgroundColor: 'blue' }, Common.centerVertical]}>
          <LinearGradient
            colors={Colors.submitSet}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 1 }}
            style={Common.buttonWrapper}
          >
            <Text onPress={this._signInAsync} Common={Common.buttonText}>
              Continue
            </Text>
          </LinearGradient>
        </View>
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
