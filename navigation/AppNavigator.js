import React from "react";
import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator
} from "react-navigation";

import AuthLoadingScreen from "./AuthLoadingScreen";
import SignInScreen from "../screens/SignInScreen";
import HomeScreen from "../screens/HomeScreen";
import OnBoarding from "../screens/OnBoardingScreen";
import PhoneScreen from "../screens/PhoneScreen";
import userImages from "../screens/onBoarding/userImages";

const Boarding = createStackNavigator({
  step1: userImages,
  screen0: OnBoarding,
  screen2: OnBoarding,
  screen3: OnBoarding,
  screen4: OnBoarding,
  screen5: OnBoarding,
  screen6: OnBoarding,
  screen7: OnBoarding,
  screen8: OnBoarding,
  screen9: OnBoarding,
  screen10: OnBoarding,
  screen11: OnBoarding,
  screen12: OnBoarding,
  screen13: OnBoarding
});

const AppStack = createStackNavigator({ Home: HomeScreen });
const AuthStack = createStackNavigator({
  SignIn: SignInScreen,
  PhoneSignIn: PhoneScreen,
  VerifyPhone: PhoneScreen
});

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      onBoarding: Boarding,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: "AuthLoading"
    }
  )
);
