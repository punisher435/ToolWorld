import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'


import Colors from '../config/colors';
import styles from './Button.style';

export default function Button({ title, onPress, buttonstyle,textstyle }) {
  return (
    <TouchableOpacity
      style={[styles.button, buttonstyle]}
      onPress={onPress}
    >
      <Text style={[styles.text, textstyle]}>{title}</Text>
    </TouchableOpacity>
  )
}



