import { StyleSheet } from 'react-native'
import { Constants } from '../../config/constants';
import defaultStyles from "../../config/styles";
import Colors from '../../config/colors';

const z=Constants.z;


export default StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.light,
        
        flexDirection: "row",
        
    
      },
      inputtext: {
        borderBottomWidth:1,
       
        borderColor: '#E5E5E5',
        width: '100%',
        height: 65*z,
        // paddingLeft: 10*z,
        fontSize:18*z,
        marginTop:5*z,
        paddingTop:15*z,
     paddingBottom:0,
     marginBottom:0,
        color: Colors.white,
      },
      placeh: {
        color: '#E5E5E5',
      },
      icon: {
        marginRight: 10*z,
        paddingTop: 15*z,
      },
      placeholdertext:{
        color:'#E5E5E5',
        position:'absolute',
        top:-6,
        fontSize:16*z,
        fontWeight:'500',
        left:0,
      },
      iconview:{
          position:'absolute',
          right:0*z,
          top:25*z,// changed fromm 10 to 25

      },
      iconimage:{

      },

})