import React from 'react';
import { AsyncStorage, View, Text, TouchableOpacity } from 'react-native';
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
          <TouchableOpacity onPress={this._signInAsync}>
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
          </TouchableOpacity>

          {/* Continue with LinkedIn */}
          <TouchableOpacity onPress={this._signInAsync}>
            <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={Common.buttonWrapper}>
              <Text onPress={this._signInAsync} style={Common.buttonText}>
                Sign In with LinkedIn
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._signInAsync}>
            <LinearGradient colors={['#CC360C', '#DB3A0D']} style={Common.buttonWrapper}>
              <Text style={Common.buttonText}>Sign In with Google</Text>
            </LinearGradient>
          </TouchableOpacity>
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
