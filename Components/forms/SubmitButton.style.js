import { StyleSheet } from 'react-native'
import { Constants } from '../../config/constants';
import defaultStyles from "../../config/styles";
import Colors from '../../config/colors';

const z=Constants.z;
const Light=Constants.Light;
const Regular=Constants.Regular;
const Medium=Constants.Medium;
const Bold=Constants.Bold;
const Black=Constants.Black;

export default StyleSheet.create({
    buttonstyle:{
       

        backgroundColor: 'rgba(255, 255, 255, 0.06)',
    
       
        borderRadius: 56*z,
    width:'100%', // changed from 80 to 100
        
    },
    textstyle:{
                
                
        fontFamily: Medium,
        // fontStyle: 'normal',
        // fontWeight: '500',
        fontSize: 18*z,
        lineHeight: 21*z,
        
        
        
        color: '#FFFFFF',
         
    },

})