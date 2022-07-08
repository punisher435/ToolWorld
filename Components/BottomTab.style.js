import { StyleSheet } from 'react-native'
import { Constants } from '../config/constants';
import defaultStyles from "../config/styles";
import Colors from '../config/colors';

const z=Constants.z;
const w=Constants.w;


export default StyleSheet.create({
   iconimage:{
    width:24*Constants.r,
    height:23*Constants.r,
   },
   iconimage1:{
    width:20*Constants.r,
   height:23*Constants.r,
   },
   container:{
   position:'absolute',
   bottom:0,
    height:80*z,
    width:'100%',
   },
   container1:{
    position:'absolute',
    alignSelf:'center',
    bottom:25*z,
     height:60*z,
     width:'90%',
    },

   bgimage:{
    flex:1,
    
    width:'100%',
    height:'100%',
    position:'absolute',
    opacity:0.98,
   
},
con:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'flex-start',
},

gradientimage:{
    flex:1,
    
    width:'100%',
    height:'100%',
    position:'absolute',
    opacity:0.02,
},
item:{
    width:'20%',
    height:'100%',
    alignItems:'center',
    
},
button:{
    paddingTop:15*z,
},
textcon:{

marginTop:10*z,
height:20*z,
width:60*z,
borderTopLeftRadius:10*z,
borderTopRightRadius:10*z,
},
text:{
    fontFamily: 'Roboto-Regular',
    // fontStyle: 'normal',
    // fontWeight: '400',
    fontSize: 10*Constants.r,
    color:'#9B9B9B',
    lineHeight:10*Constants.l,
  textAlign:'center',
},
con1:{
   
    alignItems:'center',
}

})