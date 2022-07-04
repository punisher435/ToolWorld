import React,{useState} from "react";
import { View, TextInput, StyleSheet,Text,TouchableOpacity,Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import DateTimePicker from '@react-native-community/datetimepicker';
import { useFormikContext } from "formik";

import defaultStyles from "../../config/styles";
import Colors from '../../config/colors';
import styles from './DatePicker1.style';

function DatePicker1({name, icon, width = "100%", holder,...otherProps }) {
    


  const [mydate, setDate] =   React.useState(new Date());

  const { setFieldTouched, handleChange, errors, touched,values,setFieldValue } = useFormikContext();
  const fieldvalue = values[name];

   const [displaymode, setMode] = React.useState('date');

   const [isDisplayDate, setShow] = React.useState(false);


   const changeSelectedDate = (event, selectedDate) => {
   const currentDate = selectedDate || mydate;
   setDate(currentDate);
   var d=`${currentDate.getDate()}`
   var m=`${currentDate.getMonth()+1}`
   var y=`${currentDate.getFullYear()}`
   if(d.length==1)
   {
     d="0"+d;
   }
   if(m.length==1)
   {
     m="0"+m;
   }
  
   var x=`${d}-${m}-${y}`;
   setShow(false);
   setFieldValue(name,x);
  
};

const showMode = (currentMode) => {
   setShow(true);
   setMode(currentMode);
};
const displayDatepicker = () => {
   showMode('date');
};





  return (
    <View style={[styles.container, { width }]}>
      
       
      

{isDisplayDate && (
  <DateTimePicker
     testID="dateTimePicker"
     value={mydate}
     mode={displaymode}
     is24Hour={true}
     display="default"
     onChange={changeSelectedDate}
/>
)}
      <Text style={styles.placeholdertext}>{holder}</Text>
      <TextInput
        placeholderTextColor={Colors.white}
        style={[styles.inputtext]}

        {...otherProps}
      />
       <TouchableOpacity onPress={displayDatepicker} style={styles.iconview}>
        
        <Image source={require('../../config/assets/calendar.png')}  style={styles.iconimage}>
        
        </Image>
        
        </TouchableOpacity>
      
      <View>
       
      </View>
    </View>
   
  );
}



export default DatePicker1;
