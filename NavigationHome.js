import React from 'react'
import {  StyleSheet, Dimensions,View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './screens/Home';
import MainProfile from './screens/MainProfile';
import MainCart from './screens/MainCart';
import MainShop from './screens/MainShop';
import MainWishlist from './screens/MainWishlist';
import BottomTab from './components/BottomTab';
import ProductPage from './screens/ProductPage';

/* import Home from './screens/Home';

import MainProfile from './screens/MainProfile';
import MainProgress from './screens/MainProgress';
import Sections from './screens/Sections';
import Chapters from './screens/Chapters';
import Inbox from './screens/Inbox';
import AccountSettings from './screens/AccountSettings';
import About from './screens/About';
import Favourite from './screens/Favourite';
import Player from './screens/Player';
import Payments from './screens/Payments';
import Myorders from './screens/Myorders';
import Chatbox from './screens/Chatbox'
import Mycourses from './screens/Mycourses'; */

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function StackHome() {
  return (
      
      <Stack.Navigator initialRouteName="MainHome" screenOptions={{
        headerShown:false,
        
      }} headerMode="none"

      options={{
        headerMode:"none",
      }}
     
      
      >
         <Stack.Screen name="MainHome" component={Home} />
         <Stack.Screen name="Product" component={ProductPage} />
        {/* <Stack.Screen name="Sections" component={Sections} />
        <Stack.Screen name="Chapters" component={Chapters} />
        <Stack.Screen name="Video" component={Player} />
        <Stack.Screen name="Inbox" component={Inbox} />
        <Stack.Screen name="Payments" component={Payments} />
        <Stack.Screen name="Chatbox" component={Chatbox} />  */}
        
      </Stack.Navigator>
  )
}


/* function StackProgress() {
  return (
      
      <Stack.Navigator initialRouteName="Mycourses" screenOptions={{
        headerShown:false,
        
      }} headerMode="none"

      options={{
        headerMode:"none",
      }}
     
      
      >
        <Stack.Screen name="Mycourses" component={Mycourses} />
        <Stack.Screen name="MainProgress" component={MainProgress} />
        <Stack.Screen name="MainHome" component={Home} />
        
      </Stack.Navigator>
  )
} */

function StackProfile() {
  return (
      
      <Stack.Navigator initialRouteName="MainProfile" screenOptions={{
        headerShown:false,
        
      }} headerMode="none"

      options={{
        headerMode:"none",
      }}
     
      
      >
        <Stack.Screen name="MainProfile" component={MainProfile} />
        
      </Stack.Navigator>
  )
}

function StackShop() {
  return (
      
      <Stack.Navigator initialRouteName="MainShop" screenOptions={{
        headerShown:false,
        
      }} headerMode="none"

      options={{
        headerMode:"none",
      }}
     
      
      >
        <Stack.Screen name="MainShop" component={MainShop} />
        
      </Stack.Navigator>
  )
}

function StackCart() {
  return (
      
      <Stack.Navigator initialRouteName="MainCart" screenOptions={{
        headerShown:false,
        
      }} headerMode="none"

      options={{
        headerMode:"none",
      }}
     
      
      >
        <Stack.Screen name="MainCart" component={MainCart} />
        
      </Stack.Navigator>
  )
}
function StackWishlist() {
  return (
      
      <Stack.Navigator initialRouteName="MainWishlist" screenOptions={{
        headerShown:false,
        
      }} headerMode="none"

      options={{
        headerMode:"none",
      }}
     
      
      >
        <Stack.Screen name="MainWishlist" component={MainWishlist} />
        
      </Stack.Navigator>
  )
}



function NavigationHome() {
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

<Tab.Navigator tabBar={(props) => <BottomTab {...props} />} screenOptions={{
        headerShown:false,
        
      }} >
        <Tab.Screen name="Home"  component={StackHome} />
        <Tab.Screen name="Shop"  component={StackShop} />
        <Tab.Screen name="Cart"  component={StackCart} />
        <Tab.Screen name="Wishlist"  component={StackWishlist} />
        <Tab.Screen name="Profile"  component={StackProfile} />
        {/* <Tab.Screen name="ProgressStack"  component={StackProgress} />
        <Tab.Screen name="ProfileStack"  component={StackProfile} /> */}
        {/* <Tab.Screen name="AccountStack"  component={StackAccountSettings}/> */}
        
      </Tab.Navigator>

    </NavigationContainer>
    </View>

  )
}



export default NavigationHome

const styles = StyleSheet.create({
  screen: {



  },
  container: {
    flex: 1,
  }
})
