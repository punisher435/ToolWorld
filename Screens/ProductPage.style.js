import { StyleSheet,Dimensions } from 'react-native'
import { Constants } from '../config/constants';

const z = Constants.z;
const r = Constants.r;
const l = Constants.l;
const Light = Constants.Light;
const Regular = Constants.Regular;
const Medium = Constants.Medium;
const Bold = Constants.Bold;
const Black = Constants.Black;
const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
    con:{
        marginTop:20*r,
        height:400*r,
        width:width,
        alignSelf:'center',
    },
    title:{
        fontFamily: 'DMSans-Bold',
        fontStyle: 'normal',
        // fontWeight: '500',
        fontSize: 24 * r,
        lineHeight:32*l,
        letterSpacing:0.2,
        color:'#0C1A30',
    },
    con2:{
        marginLeft:20*r,
        marginRight:30*r,
        marginTop:17*r,
    },
    con3:{
        marginLeft:20*r,
        marginRight:30*r,
        marginTop:4*r,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    text3:{
        fontFamily: 'DMSans-Bold',
        fontStyle: 'normal',
        // fontWeight: '500',
        fontSize: 16 * r,
        lineHeight:20*l,
        letterSpacing:0.2,
        color:'#F96302',
    },
    text1:{
        fontFamily: 'DMSans-Regular',
        fontStyle: 'normal',
        // fontWeight: '500',
        fontSize: 14 * r,
        lineHeight:18*l,
        letterSpacing:0.2,
        color:'#0C1A30',
        marginLeft:8*r,
    },
    text2:{
        fontFamily: 'DMSans-Regular',
        fontStyle: 'normal',
        // fontWeight: '500',
        fontSize: 14 * r,
        lineHeight:18*l,
        letterSpacing:0.2,
        color:'#0C1A30',
        marginLeft:8*r,
    },
    text4:{
        fontFamily: 'DMSans-Bold',
        fontStyle: 'normal',
        // fontWeight: '500',
        fontSize: 14 * r,
        lineHeight:20*l,
        
        color:'#FFFFFF',
        
    },
    text14:{
        fontFamily: 'DMSans-Bold',
        fontStyle: 'normal',
        // fontWeight: '500',
        fontSize: 9 * r,
        lineHeight:20*l,
        
        color:'#FFFFFF',
        
    },
    button1:{
        backgroundColor:'#F96302',
        flexDirection:'row',
        height:39*r,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10*r,
        width:80.5*r,
        
       
    },
    button2:{
        backgroundColor:'#0ACF83',
        
        height:39*r,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10*r,
        width:80.5*r,
        marginLeft:10*r,
    },
    button3:{
        backgroundColor:'#F96302',
        flexDirection:'row',
        height:50*r,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10*r,
        width:153*r,
        
       
    },
    button4:{
        backgroundColor:'#0ACF83',
        
        height:50*r,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10*r,
        width:153*r,
        marginLeft:19*r,
    },
    text114:{
        fontFamily: 'DMSans-Bold',
        fontStyle: 'normal',
        // fontWeight: '500',
        fontSize: 14 * r,
        lineHeight:20*l,
        
        color:'#FFFFFF',
        marginRight:7*r,
        
    },
    text124:{
        fontFamily: 'DMSans-Bold',
        fontStyle: 'normal',
        // fontWeight: '500',
        fontSize: 14 * r,
        lineHeight:20*l,
        
        color:'#FFFFFF',
        
    },
    con4:{
        marginLeft:20*r,
        marginRight:30*r,
        marginTop:4*r,
    },
    text5:{
        fontFamily: 'Poppins-SemiBold',
        fontStyle: 'normal',
        // fontWeight: '500',
        fontSize: 15 * r,
        lineHeight:20*l,
        
        color:'#000000',
        marginBottom:4*r,
    },
    text6:{
        fontFamily: 'Poppins-Light',
        fontStyle: 'normal',
        // fontWeight: '500',
        fontSize: 12 * r,
        lineHeight:18*l,
        
        color:'#000000',
    },
    text7:{
        fontFamily: 'Poppins-Light',
        fontStyle: 'normal',
        // fontWeight: '500',
        fontSize: 12 * r,
        lineHeight:15*l,
        
        color:'#000000',
    },
    text8:{
        fontFamily: 'Poppins-Light',
        fontStyle: 'normal',
        // fontWeight: '500',
        fontSize: 12 * r,
        lineHeight:15*l,
        
        color:'#000000',
    },
    text9:{
        fontFamily: 'Poppins-SemiBold',
        fontStyle: 'normal',
        // fontWeight: '500',
        fontSize: 12 * r,
        lineHeight:15*l,
        
        color:'#000000',
    },
    text10:{
        fontFamily: 'DMSans-Bold',
        fontStyle: 'normal',
        // fontWeight: '500',
        fontSize: 16 * r,
        lineHeight:20*l,
        
        color:'#F96302',
    },

    text11:{
        fontFamily: 'Poppins-Light',
        fontStyle: 'normal',
        // fontWeight: '500',
        fontSize: 12 * r,
        lineHeight:15*l,
        
        color:'#000000',
    },

    text12:{
        fontFamily: 'Poppins-SemiBold',
        fontStyle: 'normal',
        // fontWeight: '500',
        fontSize: 17 * r,
        lineHeight:22*l,
        
        color:'#000000',
    },
    text13:{
        fontFamily: 'Poppins-SemiBold',
        fontStyle: 'normal',
        // fontWeight: '500',
        fontSize: 15 * r,
        lineHeight:20*l,
        
        color:'#F96302',
    },

    texxt1:{
        fontFamily: 'DMSans-Bold',
        fontStyle: 'normal',
        // fontWeight: '500',
        fontSize: 16 * r,
        lineHeight:25*l,
        letterSpacing:0.0038,
        color:'#0C1A30',
        
    },
    texxt2:{
        fontFamily: 'DMSans-Bold',
        fontStyle: 'normal',
        // fontWeight: '500',
        fontSize: 12 * r,
        lineHeight:22*l,
        letterSpacing:0.004,
        color:'#F96302',
        
    },
})