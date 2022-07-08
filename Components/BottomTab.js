import * as React from 'react';
import { View, Text, TouchableOpacity,Image ,ImageBackground} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';

import styles from './BottomTab.style';

const BottomTab1 = ({ state, descriptors, text }) => {
  const navigation = useNavigation();
return (
  <View style={styles.container}>
  



<View style={styles.con}>
{state.routes.map((route, index) => {
  const { options } = descriptors[route.key];
  const label =
    options.tabBarLabel !== undefined
      ? options.tabBarLabel
      : options.title !== undefined
      ? options.title
      : route.name;

  const isFocused = state.index === index;

  const onPress = () => {
    navigation.navigate(route.name);
  };

  const onLongPress = () => {
    
  };

  return (
    
      <View style={styles.item} key={index}>
    <TouchableOpacity
      accessibilityRole="button"
      accessibilityState={isFocused ? { selected: true } : {}}
      accessibilityLabel={options.tabBarAccessibilityLabel}
      testID={options.tabBarTestID}
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.button}
      key={index}
    >
        <View style={styles.con1}>
        <View >
            {
                label=="Home" ? <Image source={require('../config/assets/home.png')}  style={styles.iconimage}>

                </Image> : null
            }

            {
                label=="Shop" ? <Image source={require('../config/assets/shop.png')}  style={styles.iconimage}>

                </Image> : null
            }

            {
                label=="Cart" ? <Image source={require('../config/assets/cart.png')}  style={styles.iconimage}>

                </Image> : null
            }
             {
                label=="Wishlist" ? <Image source={require('../config/assets/wishlist.png')}  style={styles.iconimage}>

                </Image> : null
            }
             {
                label=="Profile" ? <Image source={require('../config/assets/profile.png')}  style={styles.iconimage1}>

                </Image> : null
            }
        
        </View>

              <View style={styles.textcon}><Text style={[{ color: isFocused ? '#FFFFFF' : '#FFFFFF' },styles.text]}>
            {label}
          </Text></View> 
      </View>
    </TouchableOpacity>
    </View>
  );
})}
</View>

</View>
);
}







function BottomTab({ state, descriptors, text }) {
 const navigation=useNavigation();



  
    return (
      <>
      {
        navigation ? navigation.getCurrentRoute() ? 
        (navigation.getCurrentRoute().name==="Video" || navigation.getCurrentRoute().name==="Chatbox" || navigation.getCurrentRoute().name==="Payments") ? null : 
        <BottomTab1 state={state} descriptors={descriptors} text={text} navigatipn={navigation}/>
        : <BottomTab1 state={state} descriptors={descriptors} text={text} navigatipn={navigation}/>
        : <BottomTab1 state={state} descriptors={descriptors} text={text} navigatipn={navigation}/>
       
      }
      </>
    );
  }

  export default BottomTab;