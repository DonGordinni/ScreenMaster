//Homepage
import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native'

const Home = ({navigation}) => {
  
  return(
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Text style={{fontSize:25}}>Homepage</Text>

      <Button title="Go to About" onPress={()=>{navigation.navigate('About')}}/>
    </View>
  )
}
const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  }
});

export default Home;