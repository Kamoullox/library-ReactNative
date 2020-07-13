import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import des différentes pages
import HomeScreen from "./screens/HomeScreen";
import BookScreen from "./screens/BookScreen";
import Home from './screens/HomeScreen';
import Library from './screens/LibraryScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home" >
        <Stack.Screen 
        name="home" 
        component={Home}
        options={{
          "title": "Bienvenue"
        }}
        />
        <Stack.Screen 
        name="library" 
        component={Library} 
        options={{
          "title": "Bibliothèque"
        }}
        />
        <Stack.Screen 
        name="book" 
        component={BookScreen} 
        options={{
          "title": "Livre"
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}