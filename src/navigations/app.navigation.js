import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LandingScreen from '../screens/landing';
import SignUpScreen from '../screens/signUp';
import Dashboard from '../screens/dashboard';
import MenuMakanan from '../screens/menuMakanan';
import EditMakanan from '../screens/editMakanan';

const {Navigator, Screen} = createStackNavigator();

const HomeNavigator = () => (
  <Navigator headerMode="none">
    <Screen name="Landing" component={LandingScreen} />
    <Screen name="SignUp" component={SignUpScreen} />
    <Screen name="Dashboard" component={Dashboard} />
    <Screen name="MenuMakanan" component={MenuMakanan} />
    <Screen name="EditMakanan" component={EditMakanan} />
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
);
