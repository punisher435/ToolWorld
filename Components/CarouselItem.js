import React from 'react'
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native'

import colors from '../config/colors';
import { Constants } from '../config/constants';
import fontsize from '../config/fontsize';
import defaultStyles from '../config/styles';

import styles from './CarouselItem.style'

const { width, height } = Dimensions.get('window')



const CarouselItem = ({ item }) => {

  

    return (
        <View style={{flex:1,backgroundColor:item.bg,}}>
           
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:80*Constants.r}}>
        <View>
          <Text style={styles.text1}>ToolWorld</Text>
        </View>
        <View>
          <Text style={styles.text2}>Skip</Text>
        </View>
      </View>
     
             <View style={styles.con1}>
                <Image style={styles.image} source={
                 item.url1
                
              } />
              </View>
              <Image style={styles.image1} source={
                item.url2
                
              } />
             
              <Image style={styles.image2} source={
                item.url3
                
              } />

              <View style={styles.textcon1}>
                <Text style={styles.text3}>{item.title}</Text>
              </View>
              <View style={styles.textcon2}>
                <Text style={styles.text4}>{item.description}</Text>
              </View>
                
            
            {/* <View style={styles.textarea}>
                <Text style={styles.itemTitle1}> {item.title}</Text>
                <Text style={styles.itemDescription1}>{item.description}</Text>
            </View> */}
        </View>
    )
}



export default CarouselItem