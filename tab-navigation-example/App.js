//Main Imports
import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

//navigation imports
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

//Aboutpage Homepage and Contactspage imports
import About from './Screens/Aboutpage.js';
import Home from './Screens/Homepage.js';
import Contacts from './Screens/Contactspage';

//Definition of menu
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} options={{
          tabBarIcon: () => (<Image source={require("./assets/Home.png")} style={{ width: 20, height: 20 }} />)
        }} />
        <Tab.Screen name="About" component={About} options={{
          tabBarIcon: () => (<Image source={require("./assets/about.png")} style={{ width: 20, height: 20 }} />)
        }} />
        <Tab.Screen name="Contacts" component={Contacts} options={{
          tabBarIcon: () => (<Image source={require("./assets/contacts.png")} style={{ width: 20, height: 20 }} />)
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}