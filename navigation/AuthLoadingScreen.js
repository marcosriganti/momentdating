import React from 'react';
// import firebase from 'react-native-firebase';
import { ActivityIndicator, AsyncStorage, StatusBar, StyleSheet, View } from 'react-native';

class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
    this._bootstrapAsync();
  }

  /**
   * When the App component mounts, we listen for any authentication
   * state changes in Firebase.
   * Once subscribed, the 'user' parameter will either be null
   * (logged out) or an Object (logged in)
   */
  // componentDidMount() {
  //   this.authSubscription = firebase.auth().onAuthStateChanged(user => {
  //     this.setState({
  //       loading: false,
  //       user,
  //     });
  //   });
  // }
  /**
   * Don't forget to stop listening for authentication state changes
   * when the component unmounts.
   */
  // componentWillUnmount() {
  //   this.authSubscription();
  // }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    const onBoardingDone = await AsyncStorage.getItem('onBoarding');

    if (userToken) {
      if (onBoardingDone) {
        this.props.navigation.navigate('App');
      } else {
        this.props.navigation.navigate('onBoarding');
      }
    } else {
      this.props.navigation.navigate('Auth');
    }
    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
  };

  // Render any loading content that you like here
  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}
export default AuthLoadingScreen;
