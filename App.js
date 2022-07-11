/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import 'react-native-gesture-handler';
 import auth from '@react-native-firebase/auth';
 import firebase from '@react-native-firebase/app';


import React from 'react';
import {

  StyleSheet,
  Text,
  useColorScheme,
  View,Dimensions,StatusBar,Platform
} from 'react-native';


import { Provider } from 'react-redux';
import Orientation from 'react-native-orientation';

import store from './redux/store';
import AuthCheck from './AuthCheck';
import Categories from './Screens/Categories';
import Home from './Screens/Home';
import Profile from './Screens/Profile';
// import Login from './Screens/Login';
// import Setpassword from './Screens/Setpassword';
// import Signup from './Screens/Signup';





const App = () => {
  const [width1, setwidth] = React.useState(Dimensions.get('window').width);
  const [height1, setheight] = React.useState(Dimensions.get('window').height);
  Dimensions.addEventListener('change', () => {
    setwidth(Dimensions.get('window').width);
              setheight(Dimensions.get('window').height);
});




React.useEffect(() => {
  Orientation.lockToPortrait();
},[])

React.useEffect(() => {
  StatusBar.setTranslucent(true);
    StatusBar.setBackgroundColor("transparent");
},[])



  return (
   
      
      <Provider store = { store }>
        <View style={{flex:1,}} >
    <AuthCheck />
    
   
   
    
     
    
    </View>
  </Provider>
     
     
    
  );
};

const styles = StyleSheet.create({
  backgroundStyle:{

  },
  container:{
    flex:1,
  },

  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
