import { StyleSheet } from 'react-native'
import { Constants } from '../config/constants';
import defaultStyles from "../config/styles";
import Colors from '../config/colors';

const z=Constants.z;
const l=Constants.l;
const r=Constants.r
const Medium=Constants.Medium;

export default StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.light,
        
        flexDirection: "row",
        
    
      },
      inputtext: {
        // borderBottomWidth:1,
        borderWidth:1,
        borderRadius:8*r,
        borderColor: '#E5E5E5',
        width: '100%',
        height: 39*r, // changed from 65 to 58
        // paddingLeft: 10*z,
        fontSize:18*z,
        marginTop:1*z, //changed from 5 to 1
        paddingTop:10*z,
     paddingBottom:0,
     marginBottom:0,
        color: Colors.black,
        fontFamily:Medium,
        lineHeight:21*l,
        paddingLeft:"2%"
      },
      placeh: {
        color:'#E5E5E5',
      },
      icon: {
        marginRight: 10*z,
        paddingTop: 15*z,
      },
      placeholdertext:{
        color:'#353636',
        position:'absolute',
        fontSize:15*r,
        fontWeight:'500',
        top:-15*z,
        left:0,
        fontFamily:"Poppins",
        lineHeight:22*l
      }

})