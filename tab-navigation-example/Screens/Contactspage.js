//contacts page
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Contacts = () => {
  const navigationOptions = {
    drawerLabel:'Contact',
    drawerIcon: ({ tintColor }) => (
      <Image source={require('../assets/contacts.png')} style={[styles.icon,{tintColor:tintColor}]}/> 
    ),
  }
  
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text style={{fontSize:25}}>Contacts Screem</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  }
});
export default Contacts;