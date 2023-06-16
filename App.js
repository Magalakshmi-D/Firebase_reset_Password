import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { auth } from "./firebase/firebase.config";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';
import HomeScreen from './HomeScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: true}}>
        <Stack.Screen name='LoginScreen' component={LoginScreen} />
        <Stack.Screen name='SignupScreen' component={SignupScreen} />
        <Stack.Screen name='HomeScreen' component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;