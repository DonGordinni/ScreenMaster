//Main Imports
import * as React from 'react';
import {StyleSheet, Image} from 'react-native';

//navigation imports
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

//Aboutpage Homepage and Contactspage imports
import About from './Screens/Aboutpage.js';
import Home from './Screens/Homepage.js';
import Contacts from './Screens/Contactspage';

//Definition of menu
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation>
        
        <Drawer.Screen name="Home" component={Home} options={{
         drawerIcon: ({ tintColor }) => (
          <Image source={require('./assets/home.png')} style={[styles.icon, { tintColor: tintColor }]}/>
          )}} />

        <Drawer.Screen name="About" component={About} options={{
         drawerIcon: ({ tintColor }) => (
          <Image source={require('./assets/about.png')} style={[styles.icon, { tintColor: tintColor }]}/> 
         )}}/>

        <Drawer.Screen name="Contacts" component={Contacts} options={{
         drawerIcon: ({ tintColor }) => (
          <Image source={require('./assets/contacts.png')} style={[styles.icon, { tintColor: tintColor }]}/> 
         )}}/>

      </Drawer.Navigator>

    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  icon:{
    width: 24,
    height: 24
  }
})