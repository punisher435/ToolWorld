import { StyleSheet } from 'react-native'
import { Constants } from '../config/constants';
import defaultStyles from "../config/styles";
import Colors from '../config/colors';

const z=Constants.z;


export default StyleSheet.create({
    button: {
    

        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        width: "100%",
        
      },
      text: {
        
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    
    
      },

})