import React from "react";
import {
  AsyncStorage,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
// import * as GoogleSignIn from 'expo-google-sign-in';
// import * as Google from 'expo-google-app-auth';
import * as GoogleSignIn from "expo-google-sign-in";
// This value should contain your REVERSE_CLIENT_ID

// Local Components

import Logo from "../components/Logo";
import WelcomeLogo from "../components/WelcomeLogo";
//Styles
import Common from "../styles/Common";
import Colors from "../constants/Colors";

class SignInScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <Logo />,
    headerStyle: { backgroundColor: "#fff", elevation: 0, borderBottomWidth: 0 }
  };

  // componentDidMount = async () => {
  // try {
  //   await GoogleSignIn.initAsync({
  //     clientId: '421951436102-n61pbm586cr6ki9li6q6n2cnrqjprdil.apps.googleusercontent.com',
  //   });
  // } catch ({ message }) {
  //   Alert.alert('', 'GoogleSignIn.initAsync(): ' + message);
  // }
  // };
  // signInAsync = async () => {
  //   try {
  //     await GoogleSignIn.askForPlayServicesAsync();
  //     const { type, user } = await GoogleSignIn.signInAsync();
  //     if (type === 'success') {
  //       Alert.alert(JSON.stringify(user));
  //       // ...
  //     }
  //   } catch ({ message }) {
  //     alert('login: Error:' + message);
  //   }
  // };

  render() {
    const dimensions = Dimensions.get("window");
    // const imageHeight = Math.round((dimensions.width * 9) / 16);
    const imageWidth = dimensions.width;

    return (
      <View style={{ flex: 3 }}>
        <View
          style={{
            flex: 2,
            alignItems: "center",
            flexDirection: "row"
          }}
        >
          <Image
            source={require("../assets/images/signin/signin.jpg")}
            style={{ height: imageWidth, width: imageWidth }}
          />
        </View>
        <View style={{ flex: 1, paddingHorizontal: 20 }}>
          <TouchableOpacity
            style={Common.btnPrimary}
            onPress={this._signInAsync}
          >
            <Text style={Common.btnPrimaryText}>Continue with LinkedIn</Text>
          </TouchableOpacity>
          <View style={{ flex: 2, flexDirection: "row" }}>
            <View style={{ flex: 1, marginRight: 15 }}>
              <TouchableOpacity style={Common.btnDefault}>
                <Image
                  style={Common.btnImage}
                  source={require("../assets/images/common/google.jpg")}
                ></Image>
                <Text style={Common.btnDefaultText}>Google</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1, marginLeft: 15 }}>
              <TouchableOpacity style={Common.btnDefault}>
                <Image
                  style={Common.btnImage}
                  source={require("../assets/images/common/phone.jpg")}
                ></Image>
                <Text style={Common.btnDefaultText}>Phone</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* <TouchableOpacity onPress={this._signInAsync} />
          <LinearGradient
            colors={Colors.submitSet}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 1 }}
            style={Common.buttonWrapper}
          >
            <Text
              onPress={() => {
                this.props.navigation.navigate("PhoneSignIn");
              }}
              style={Common.buttonText}
            >
              Sign In with Phone Number
            </Text>
          </LinearGradient> */}

        {/* Continue with LinkedIn */}
        {/* <TouchableOpacity onPress={this._signInAsync}>
            <LinearGradient
              colors={["#4c669f", "#3b5998", "#192f6a"]}
              style={Common.buttonWrapper}
            >
              <Text onPress={this._signInAsync} style={Common.buttonText}>
                Sign In with LinkedIn
              </Text>
            </LinearGradient>
          </TouchableOpacity> */}
        {/* <TouchableOpacity onPress={this._signInAsync}>
            <LinearGradient
              colors={["#CC360C", "#DB3A0D"]}
              style={Common.buttonWrapper}
            >
              <Text style={Common.buttonText}>Sign In with Google</Text>
            </LinearGradient>
          </TouchableOpacity> */}
      </View>
    );
  }
  _signInAsync = async () => {
    await AsyncStorage.setItem("userToken", "abc");
    this.props.navigation.navigate("screen2");
  };
}

export default SignInScreen;
