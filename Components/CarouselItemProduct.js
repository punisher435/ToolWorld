import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native'
import { TouchableOpacity } from 'react-native';

import colors from '../config/colors';
import { Constants } from '../config/constants';
import fontsize from '../config/fontsize';
import defaultStyles from '../config/styles';

import styles from './CarouselItemProduct.style'

const { width, height } = Dimensions.get('window')



const CarouselItem = ({ item}) => {
  

    return (
        <View style={{flex:1,backgroundColor:item.bg,justifyContent:'center',alignItems:'center',}}>
           
           
     
     
             <View style={{alignSelf:'center',justifyContent:'center',width:'90%',height:'90%',}}>
                <Image style={styles.image1} source={
                 item.url1
                
              } />
             
             </View> 
             

             
                
            
            
        </View>
    )
}



export default CarouselItem