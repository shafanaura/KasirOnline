import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LandingScreen from '../screens/landing';
import SignUpScreen from '../screens/signUp';
import DashboardScreen from '../screens/dashboard';

const {Navigator, Screen} = createStackNavigator();

const HomeNavigator = () => (
  <Navigator headerMode="none">
    <Screen name="Landing" component={LandingScreen} />
    <Screen name="SignUp" component={SignUpScreen} />
    <Screen name="Dashboard" component={DashboardScreen} />
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
);
