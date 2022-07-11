import { View, Text,Image ,TouchableOpacity} from 'react-native'
import React from 'react'

import styles from './Item.style';
import { Constants } from '../config/constants';

export default function Item() {
  return (
    <View style={styles.con}>
        <View>
        <Image style={styles.icon} source={
                require('../config/assets/item.png')
                
              } />




        </View>

        <View style={{flexDirection:'row',position:'absolute',left:9*Constants.r,top:120*Constants.r,justifyContent:'space-between',alignItems:'center',}}>
        <TouchableOpacity
      style={styles.button1}
      onPress={() => {}}
    >
      <Text style={styles.text14}>Add to Cart</Text>
      <Image style={styles.icon} source={
                require('../config/assets/heart1.png')
                
              } />
    </TouchableOpacity>

    <TouchableOpacity
      style={styles.button2}
      onPress={() => {}}
    >
      <Text style={styles.text4}>Buy Now</Text>
    </TouchableOpacity>
            </View>



        <View>
      <Text style={styles.text1}>PH-80 HydroTester</Text>
      <Text style={styles.text2}>Rs. 1,775.00	</Text>
      <View style={{flexDirection:'row',width:'100%',alignItems:'center',marginTop:10*Constants.r,}}>
      <View >
        <Image style={styles.icon} source={
                require('../config/assets/star1.png')
                
              } />
        </View>
      <Text style={styles.text3}>4.6   86 Reviews</Text>
      <View >
        <Image style={{alignSelf:'flex-end',marginLeft:33*Constants.r}} source={
                require('../config/assets/vector.png')
                
              } />
        </View>
      </View>
      
      </View>
    </View>
  )
}