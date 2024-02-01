import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {RegisterScreen} from '../screens/RegisterScreen';
import {LoginScreen} from '../screens/LoginScreen';
import {HomeScreen} from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

export const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Log_In">
          {props => <LoginScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Register">
          {props => <RegisterScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Home">
          {props => <HomeScreen {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
