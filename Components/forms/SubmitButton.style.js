import { StyleSheet } from 'react-native'
import { Constants } from '../../config/constants';
import defaultStyles from "../../config/styles";
import Colors from '../../config/colors';

const z=Constants.z;
const r = Constants.r;
const l=Constants.l;
const Light=Constants.Light;
const Regular=Constants.Regular;
const Medium=Constants.Medium;
const Bold=Constants.Bold;
const Black=Constants.Black;

export default StyleSheet.create({
    buttonstyle:{
       

        backgroundColor: '#F96302',
    
       
        borderRadius: 10*r,
    width:'100%', // changed from 80 to 100
        
    },
    textstyle:{
                
                
        fontFamily: "Poppins",
        // fontStyle: 'normal',
        // fontWeight: '500',
        fontSize: 17*r,
        lineHeight: 22*l,
        
        
        
        color: '#FFFFFF',
         
    },

})