import React, { useContext } from 'react';
import { ActivityIndicator, AsyncStorage, StatusBar, StyleSheet, View, Alert } from 'react-native';
import { UserContext } from '../providers/UserProvider';

const AuthLoadingScreen = () => {
  const user = useContext(UserContext);

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     loading: true,
  //   };
  // }
  // componentDidMount = () => {
  //   this._checkLoggedIn();
  // };

  // Fetch the token from storage then navigate to our appropriate place
  // _checkLoggedIn = async () => {
  //   console.log('_checkLoggedIn');
  //   const userToken = await AsyncStorage.getItem('userToken');
  //   const onBoardingDone = await AsyncStorage.getItem('onBoarding');
  //   const user = useContext(UserContext);
  //   console.log(user, userToken, onBoardingDone);
  //   // const userRef = await firestore.collection('users').doc('wO4hrjNUBMZxlrY8qFGP');
  // const user = userRef
  //   .get()
  //   .then(function(doc) {
  //     if (doc.exists) {
  //       AsyncStorage.setItem('user', doc.data());
  //     } else {
  //       // doc.data() will be undefined in this case
  //       console.log('No such document!');
  //     }
  //   })
  //   .catch(function(error) {
  //     console.log('Error getting document:', error);
  //   });

  // auth.onAuthStateChanged(user => {
  // if (userToken) {
  //   if (onBoardingDone) {
  //     this.props.navigation.navigate('App');
  //   } else {
  //     this.props.navigation.navigate('onBoarding');
  //   }
  // } else {
  //   this.props.navigation.navigate('Auth');
  // }
  // // });

  // This will switch to the App screen or Auth screen and this loading
  // screen will be unmounted and thrown away.
  // };

  // render() {

  return (
    <View>
      <ActivityIndicator />
      <StatusBar barStyle="default" />
    </View>
  );
  // }
};
export default AuthLoadingScreen;
