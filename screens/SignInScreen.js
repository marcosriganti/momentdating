import React from 'react';
import { AsyncStorage, StyleSheet, View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// Local Components

import Logo from '../components/Logo';
import WelcomeLogo from '../components/WelcomeLogo';
//Styles
import Common from '../styles/Common';
import Colors from '../constants/Colors';

class SignInScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <Logo />,
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
        }}
      >
        {/* Welcome png  */}
        {/* <View
          style={[
            Common.centerVertical,
            {
              flex: 2,
            },
          ]}
        > */}
        <WelcomeLogo />
        {/* </View> */}

        <View style={{ flex: 1 }}>
          {/* Continue With Phone Number */}
          <LinearGradient
            colors={Colors.submitSet}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 1 }}
            style={Common.buttonWrapper}
          >
            <Text onPress={this._signInAsync} style={Common.buttonText}>
              Sign In with Phone Number
            </Text>
          </LinearGradient>

          {/* Continue with LinkedIn */}
          <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={Common.buttonWrapper}>
            <Text onPress={this._signInAsync} style={Common.buttonText}>
              Sign In with LinkedIn
            </Text>
          </LinearGradient>

          <LinearGradient
            colors={['#CC360C', '#DB3A0D']}
            // start={{ x: 0, y: 1 }}
            // end={{ x: 1, y: 1 }}
            style={Common.buttonWrapper}
          >
            <Text onPress={this._signInAsync} style={Common.buttonText}>
              Sign In with Google
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
