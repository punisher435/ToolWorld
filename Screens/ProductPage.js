import { View, Text,Image,TouchableOpacity,ScrollView } from 'react-native'
import React from 'react'

import styles from './ProductPage.style'
import CarouselProduct from '../components/CarouselProduct';
import { dummyData } from '../config/Data1'
import { Constants } from '../config/constants';

const DATA= [
  {
    title:"Type of Product",
    description:"Thermo Detector",
  },
  {
    title:"Type",
    description:"Detector",
  },
  {
    title:"Power supply & runtime",
    description:"2 x 1.5V LR6 (AA) batteries 9h",
  },
  {
    title:"Measurement range",
    description:"Surface temperature, -30 degC to +500 degC",
  },
  
]

export default function ProductPage() {
  return (
    <View style={{flex:1,}}>
      <ScrollView style={{flex:1,backgroundColor:'#FFFFFF',}}>
      <View style={styles.con}>
        <CarouselProduct data={dummyData}/>
      </View>
      <View style={styles.con2}>
      <Text style={styles.title}>MS8911 - Smart SMD Tester (R/L/C)</Text>
      </View>

      <View style={styles.con3}>
        <View>
          <View>
          <Text style={styles.text3}>Rs. 3,995.00</Text>
          </View>
          <View style={{flexDirection:'row', alignItems:'center',}}>

            <View>
            <Image style={styles.icon} source={
                require('../config/assets/star.png')
                
              } />
                
                </View>

           <View>
            <Text style={styles.text1}>4.6</Text>
            </View>

            <View>
              <Text style={styles.text2}>86 Reviews</Text>
            </View>

          </View>

          
        </View>
        <View style={{flexDirection:'row',}}>
        <TouchableOpacity
      style={styles.button1}
      onPress={() => {}}
    >
      <Text style={styles.text14}>Add to Cart</Text>
      <Image style={styles.icon} source={
                require('../config/assets/Heart.png')
                
              } />
    </TouchableOpacity>

    <TouchableOpacity
      style={styles.button2}
      onPress={() => {}}
    >
      <Text style={styles.text4}>Buy Now</Text>
    </TouchableOpacity>
            </View>



       
      </View>
            
  <View style={styles.con4}>
              <Text style={styles.text5}>Description</Text>
              <Text style={styles.text6}>Simple - Immediate measuring results at one simple press with the selection of 3 emissivity gradings for more precise measurementCompact - Easy to carry around thanks to the ergonomic housing design with carrying pouchVersatile - Wide temperature measurement range for extreme conditions with press and hold continuous measuring function</Text>
            

            {
              DATA.map(data => {
                return (
          <View style={{flexDirection:'row',marginTop:4*Constants.r}}>
              <View style={{flexDirection:'row',width:114*Constants.r,justifyContent:'space-between',}}>
                <Text style={styles.text7}>{data.title}</Text>
              
                <Text style={styles.text8}>:</Text>
              </View>
              <View style={{marginLeft:20*Constants.r,width:178.7*Constants.r}}>
                <Text style={styles.text9}>{data.description}</Text>
              </View>
            </View>
                );
              })
            }
            
            
    </View>

    </ScrollView>
    </View>
  )
}