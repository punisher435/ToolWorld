import { StyleSheet } from 'react-native'
import { Constants } from '../config/constants';
import defaultStyles from "../config/styles";
import Colors from '../config/colors';

const z=Constants.z;
const l=Constants.l;
const Medium=Constants.Medium;

export default StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.light,
        
        flexDirection: "row",
        
    
      },
      inputtext: {
        borderBottomWidth:1,
       
        borderColor: '#E5E5E5',
        width: '100%',
        height: 58*z, // changed from 65 to 58
        // paddingLeft: 10*z,
        fontSize:18*z,
        marginTop:1*z, //changed from 5 to 1
        paddingTop:10*z,
     paddingBottom:0,
     marginBottom:0,
        color: Colors.white,
        fontFamily:Medium,
        lineHeight:21*l
      },
      placeh: {
        color:'#E5E5E5',
      },
      icon: {
        marginRight: 10*z,
        paddingTop: 15*z,
      },
      placeholdertext:{
        color:'#E5E5E5',
        position:'absolute',
        fontSize:16*z,
        fontWeight:'500',
        top:-15*z,
        left:0,
      }

})