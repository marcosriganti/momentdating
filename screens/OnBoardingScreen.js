import React from 'react';
import { ActivityIndicator, AsyncStorage, StatusBar, StyleSheet, View, Button, Text } from 'react-native';
import Logo from '../components/Logo';

const onBoardingStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    paddingVertical: 40,
  },
});
class OnBoarding extends React.Component {
  static navigationOptions = {
    headerTitle: <Logo />,
  };

  render() {
    return (
      <View style={onBoardingStyles.container}>
        <View>
          <Text>What's Your Preferred Name?</Text>
          <Text>Your name will be revelead only to the people when you get matched with.</Text>
          {/* <Button title="Complete This OnBoarding" onPress={this._showMoreApp} /> */}
          <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
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
