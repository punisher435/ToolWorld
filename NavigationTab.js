import React from 'react'
import {  StyleSheet, Dimensions,View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


import Welcome from "./Screens/Welcome"
/* import Signup from './screens/Signup';
import Login from './screens/Login';
import Verify from './screens/Verify';
import Otpsend from './screens/Otpsend';
import ForgetPassword from './screens/ForgetPassword'; */ 



const WelcomeStack = createStackNavigator();




function NavigationTab() {
  const [width1, setwidth] = React.useState(Dimensions.get('window').width);
  const [height1, setheight] = React.useState(Dimensions.get('window').height);
  Dimensions.addEventListener('change', () => {
    setwidth(Dimensions.get('window').width);
              setheight(Dimensions.get('window').height);
});
  return (
    <View style={{flex:1,}} onLayout={(e) => {
      setwidth(Dimensions.get('window').width);
      setheight(Dimensions.get('window').height);
    }}>
    <NavigationContainer style={{flex:1,}} onLayout={(e) => {
      setwidth(Dimensions.get('window').width);
      setheight(Dimensions.get('window').height);
    }} >

      <WelcomeStack.Navigator initialRouteName="Welcome" screenOptions={{
        headerShown: false,
      }} >
         <WelcomeStack.Screen name="Welcome" component={Welcome} />
        {/* <WelcomeStack.Screen name="Signup" component={Signup} />
        <WelcomeStack.Screen name="Login" component={Login} />
        <WelcomeStack.Screen name="OTP" component={Otpsend} />
        <WelcomeStack.Screen name="Verify" component={Verify} />
        <WelcomeStack.Screen name="ForgetPassword" component={ForgetPassword} /> */} 
      </WelcomeStack.Navigator>

    </NavigationContainer>
    </View>

  )
}



export default NavigationTab

const styles = StyleSheet.create({
  screen: {



  },
  container: {
    flex: 1,
  }
})
