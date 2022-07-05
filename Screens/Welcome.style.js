import { StyleSheet } from 'react-native'
import { Constants } from '../config/constants';

const z = Constants.z;
const r = Constants.r;
const l=Constants.l;

const Light=Constants.Light;
const Regular=Constants.Regular;
const Medium=Constants.Medium;
const Bold=Constants.Bold;
const Black=Constants.Black;

export default StyleSheet.create({
    bg1:{
        width:'100%',
        
        position:'absolute',
        top:0,
        left:0,
   
    },
    bg2:{
        width:'100%',
        height:'100%',
        backgroundColor:'#F96302',
      
    },

    logo:{
        alignSelf:'center',
        marginTop:158*r,
    },
    text1:{
        fontFamily: 'PlayfairDisplay-Black',
    fontStyle: 'normal',
    // fontWeight: '500',
    fontSize: 25 * r,
    lineHeight:33*l,
    color:'#F96302',
    },
    text2:{
        fontFamily: 'DMSans-Bold',
        fontStyle: 'normal',
        // fontWeight: '500',
        fontSize: 12 * r,
        lineHeight:18*l,
        color:'#F96302',
    },
    textcon1:{
        alignSelf:'center',marginTop:165*r,
    },
    textcon2:{
        alignSelf:'center',marginTop:10*r,
    },
    text3:{
        fontFamily: 'Lato-Bold',
        fontStyle: 'normal',
        // fontWeight: '500',
        fontSize: 18 * r,
        lineHeight:22*l,
        color:'#FFFFFF',
        textTransform: 'capitalize',
        textAlign:'center',
    },
    textcon3:{
        width:253*r,
        
        marginTop:110*r,
        alignSelf:'center',
    },
    button:{
        backgroundColor:'#FFFFFF',
        
        height:54*r,
        borderRadius:50,
        width:232*r,
        alignSelf:'center',
        marginTop:30*r,
        
    },
    text4:{
        fontFamily: 'DMSans-Bold',
        fontStyle: 'normal',
        // fontWeight: '500',
        fontSize: 25 * r,
        marginTop:10*r,
        padding:15*r,
        lineHeight:18*l,
        letterSpacing: -0.165,
        color:'#F96302',
        textAlign:'center',
    },
})