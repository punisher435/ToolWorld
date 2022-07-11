import { View, Text,Image,TouchableOpacity,ScrollView } from 'react-native'
import React from 'react'

import styles from './ProductPage.style'
import CarouselProduct from '../components/CarouselProduct';
import { dummyData } from '../config/Data1'
import { Constants } from '../config/constants';
import Item from '../components/Item';

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
        <View style={{flexDirection:'row',width:'100%',marginTop:60*Constants.r,justifyContent:'space-around',alignItems:'center',}}>
          <View>
          <Image style={styles.icon1} source={
                require('../config/assets/back.png')
                
              } />
          </View>
              <View style={{marginLeft:70*Constants.r}}>
                <Text style={styles.text10}>Detail Product</Text>
              </View>
          <View  style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',justifyContent:'flex-end',}}>
          <View>
          <Image style={styles.icon1} source={
                require('../config/assets/arrow.png')
                
              } />
          </View>

          <View>
          <Image style={{marginLeft:30*Constants.r}} source={
                require('../config/assets/shopping-cart.png')
                
              } />
          </View>
          </View>
        </View>
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
  <View style={{height:1,width:'100%',borderColor:'#EDEDED',borderBottomWidth:1,marginTop:15*Constants.r,marginBottom:15*Constants.r,}}>

</View>
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
            
            <View style={{height:1,width:'100%',borderColor:'#EDEDED',borderBottomWidth:1,marginTop:15*Constants.r,}}>

            </View>

            <View style={{marginTop:22*Constants.r}}>
      <Text style={styles.text13}>Reviews</Text>
      <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:4*Constants.r,}}>
        <View>
          <Text style={styles.text11}>248 Reviews</Text>
        </View>
        <View style={{flexDirection:'row',alignItems:'center',}}>
          <View><Text style={styles.text12}>4.8 Out of 5.0 </Text></View>
          <View>
          <Image style={styles.icon} source={
                require('../config/assets/right.png')
                
              } />
          </View>
        </View>
      </View>
    </View>

    <View style={{height:1,width:'100%',borderColor:'#EDEDED',borderBottomWidth:1,marginTop:15*Constants.r,marginBottom:15*Constants.r,}}>

</View>

    



            
    </View>



    <View style={{width:'100%',backgroundColor:'#FAFAFA',}}>
    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-around',marginTop:20*Constants.r,marginBottom:5*Constants.r}}>
              <Text style={styles.texxt1}>
              Featured Product
              </Text>
              <Text style={styles.texxt2}>
              See All
              </Text>
    </View>
    <View style={{flexDirection:'row',alignItems:'center',padding:10,justifyContent:'space-around',}}>
    
    <Item />
    <Item />
    </View>
    </View>

    <View style={{backgroundColor:'#FAFAFA',width:'100%',}}> 


    <View style={{position:'absolute',bottom:0,left:0,width:'100%',}}>
    <Image style={{width:'100%'}} source={
                require('../config/assets/bottom.png')
                
              } />

<View style={{flexDirection:'row',position:'absolute',bottom:30*Constants.r,left:45*Constants.r,}}>
        <TouchableOpacity
      style={styles.button3}
      onPress={() => {}}
    >
      <Text style={styles.text114}>Add to Cart</Text>
      <Image style={styles.icon} source={
                require('../config/assets/Heart.png')
                
              } />
    </TouchableOpacity>

    <TouchableOpacity
      style={styles.button4}
      onPress={() => {}}
    >
      <Text style={styles.text124}>Buy Now</Text>
    </TouchableOpacity>
            </View>







    </View>
    
              <View style={{height:140*Constants.r,}}>
              
              </View>
              </View>
    </ScrollView>
    </View>
  )
}