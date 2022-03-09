import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen  from './homescreen';
import LoginScreen from './loginscreen';
import NiruScreen from './niruscreen';

const Stack = createNativeStackNavigator();

const NavScreen=() => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Niru" component={NiruScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavScreen;
