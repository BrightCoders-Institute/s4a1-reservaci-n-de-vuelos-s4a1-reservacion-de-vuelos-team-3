import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {RegisterScreen} from '../screens/RegisterScreen';
import {LoginScreen} from '../screens/LoginScreen';
import {HomeScreen} from '../screens/HomeScreen';
import FligtsR_01_W from '../screens/FlightsScreen/FligtsR_01_W';
import FligtsR_02_WF from '../screens/FlightsScreen/FligtsR_02_WF';
import FligtsR_03_Calendar from '../screens/FlightsScreen/FligtsR_03_Calendar';
import FligtsR_04_Passagers from '../screens/FlightsScreen/FligtsR_04_Passagers';
import {FligtsR_05_Final} from '../screens/FlightsScreen/FligtsR_05_Final';

const Stack = createNativeStackNavigator();

export const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Log_In"
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
        <Stack.Screen name="FR1">
          {props => <FligtsR_01_W {...props} />}
        </Stack.Screen>
        <Stack.Screen name="FR2">
          {props => <FligtsR_02_WF {...props} />}
        </Stack.Screen>
        <Stack.Screen name="FR3">
          {props => <FligtsR_03_Calendar {...props} />}
        </Stack.Screen>
        <Stack.Screen name="FR4">
          {props => <FligtsR_04_Passagers {...props} />}
        </Stack.Screen>
        <Stack.Screen name="FR5">
          {props => <FligtsR_05_Final {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
