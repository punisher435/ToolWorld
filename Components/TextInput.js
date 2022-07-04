import React from "react";
import { View, TextInput, StyleSheet,Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";


import defaultStyles from "../config/styles";
import Colors from '../config/colors';
import styles from './TextInput.style';

function AppTextInput({ icon, width = "100%", holder,...otherProps }) {
  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={defaultStyles.colors.medium}
          style={styles.icon}
        />
      )}
      <Text style={styles.placeholdertext}>{holder}</Text>
      <TextInput
        placeholderTextColor={Colors.white}
        style={[styles.inputtext]}

        {...otherProps}
      />
    </View>
  );
}



export default AppTextInput;
