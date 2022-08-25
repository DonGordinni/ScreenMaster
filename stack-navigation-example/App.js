//main Imports
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

//navigation imports
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

//Aboutpage and Homepage imports
import About from './Screens/Aboutpage.js';
import Home from './Screens/Homepage.js';

//Definition of menu
const appNavigator = createStackNavigator({
  Home: {
    screen: Home,
  },
  About: {
    screen: About,
  }
},{
  initialRouteName: 'Home'
})

//AppContainer to show the menus
const AppContainer = createAppContainer(appNavigator)

export default function App() {
  return <AppContainer/>
}