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
           {/*  {
                label=="Home" ? <Image source={require('../config/assets/Home.png')}  style={styles.iconimage}>

                </Image> : null
            }

            {
                label=="ProgressStack" ? <Image source={require('../config/assets/Chart1.png')}  style={styles.iconimage}>

                </Image> : null
            }

            {
                label=="ProfileStack" ? <Image source={require('../config/assets/Chart2.png')}  style={styles.iconimage}>

                </Image> : null
            } */}
        
        </View>

        {
            label=="Home" ?      <View style={styles.textcon}><Text style={[{ color: isFocused ? '#FFFFFF' : '#FFFFFF' },styles.text]}>
            {label}
          </Text></View> : null
        }
      </View>
    </TouchableOpacity>
    </View>
  );
})}
</View>

</View>
);
}





const BottomTab2 = ({ state, descriptors, text}) => {
  const navigation=useNavigation();
  return (
    <View style={styles.container1}>
   
  

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
              {/* {
                  label=="Home" ? <Image source={require('../config/assets/Home2.png')}  style={styles.iconimage1}>
  
                  </Image> : null
              }
  
              {
                  label=="ProgressStack" ? <Image source={require('../config/assets/Insight.png')}  style={styles.iconimage1}>
  
                  </Image> : null
              }
  
              {
                  label=="ProfileStack" ? <Image source={require('../config/assets/Teacher.png')}  style={styles.iconimage1}>
  
                  </Image> : null
              } */}
          
          </View>
  
         
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
        navigation ? navigation.getCurrentRoute() ? navigation.getCurrentRoute().name==="Sections" ? <BottomTab2 state={state} descriptors={descriptors} text={text}/> :
        (navigation.getCurrentRoute().name==="Video" || navigation.getCurrentRoute().name==="Chatbox" || navigation.getCurrentRoute().name==="Payments") ? null : 
        <BottomTab1 state={state} descriptors={descriptors} text={text} navigatipn={navigation}/>
        : <BottomTab1 state={state} descriptors={descriptors} text={text} navigatipn={navigation}/>
        : <BottomTab1 state={state} descriptors={descriptors} text={text} navigatipn={navigation}/>
       
      }
      </>
    );
  }

  export default BottomTab;