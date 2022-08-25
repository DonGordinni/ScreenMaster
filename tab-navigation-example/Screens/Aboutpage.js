//About screem
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const About = () =>{
  const navigationOptions = {
    drawerLabel: 'About',
    drawerIcon: ({ tintColor }) =>(
      <Image source={require('../assets/about.png')} style={[styles.icon,{tintColor:tintColor}]}/> 
    ),
  }
 

  return(
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Text style={{fontSize:25}}> About Screem </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  }
});
export default About;