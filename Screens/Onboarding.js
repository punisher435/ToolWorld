import { View, Text } from 'react-native'
import React from 'react'

import styles from './Onboarding.style'
import Carousel from '../components/Carousel';
import { dummyData } from '../config/Data'

export default function Onboarding() {
  return (
    <View style={{flex:1,}}>
      
      <Carousel data={dummyData} />
    </View>
  )
}