import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import AuthLoadingScreen from './AuthLoadingScreen';
import SignInScreen from '../screens/SignInScreen';
import HomeScreen from '../screens/HomeScreen';
import OnBoarding from '../screens/OnBoardingScreen';

const AppStack = createStackNavigator({
  screen0: OnBoarding,
  screen1: OnBoarding,
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

  Home: HomeScreen,
});
const AuthStack = createStackNavigator({ SignIn: SignInScreen });

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'App',
    }
  )
);
