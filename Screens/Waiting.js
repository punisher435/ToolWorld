import { View, Text,Image,ImageBackground } from 'react-native'
import React from 'react'

import styles from './Waiting.style';

export default function Waiting() {
  return (

<View style={styles.container}>



<View style={styles.container1}>
          <View style={styles.logocon1}>
            <View style={styles.logocon2}>
              <Image source={
                require('../config/assets/QI_Play_Altar_Logo_White_Transparant_1.png')

              }
                style={styles.image}></Image>
            </View>
          </View>
          </View>
   
    </View>
  )
}