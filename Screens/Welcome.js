import { View, Text,Image,TouchableOpacity } from 'react-native'
import React from 'react'

import styles from './Welcome.style';

export default function Welcome() {
  return (
    <View style={{flex:1,}}>
      
      <View style={styles.bg2}>
      <Image style={styles.bg1} source={
                require('../config/assets/elipse1.png')
                
              } />

<Image style={styles.logo} source={
                require('../config/assets/logo.png')
                
              } />

              <View style={styles.textcon1}>
                <Text style={styles.text1}>Welcome to ToolWorld</Text>
              </View>
              <View style={styles.textcon2}>
                <Text style={styles.text2}>FUTURE OF  ENGINEERING TOOLS</Text>
              </View>

              <View style={styles.textcon3}>
                <Text style={styles.text3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet ut nec vitae gravida ullamcorper .</Text>
              </View>


              <TouchableOpacity
      style={styles.button}
      onPress={() => {}}
    >
      <Text style={styles.text4}>LET’S BEGIN</Text>
    </TouchableOpacity>



      </View>
    </View>
  )
}