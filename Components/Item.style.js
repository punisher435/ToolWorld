import { StyleSheet } from 'react-native'
import { Constants } from '../config/constants';
import defaultStyles from "../config/styles";
import Colors from '../config/colors';

const z=Constants.z;
const l=Constants.l;
const r=Constants.r
const Medium=Constants.Medium;

export default StyleSheet.create({
    con:{
        width:160*r,
        height:259*r,
        backgroundColor:'#FFFFFF',
        borderRadius:10*r,
        paddingLeft:15*r,paddingTop:10*r,
        paddingRight:15*r,
        paddingEnd:10*r,
        elevation:0,
    },
    button2:{
        backgroundColor:'#0ACF83',
        
        
        justifyContent:'center',
        alignItems:'center',
        
        borderRadius:5*r,
        width:46*r,
        height:17*r,
       marginLeft:50*r,
    },
    button1:{
        backgroundColor:'#F96302',
        flexDirection:'row',
        
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5*r,
        width:46*r,
        height:17*r,
        
       
    },
    text14:{
        fontFamily: 'DMSans-Bold',
        fontStyle: 'normal',
        // fontWeight: '500',
        fontSize: 5 * r,
        lineHeight:20*l,
        
        color:'#FFFFFF',
        
    },
    text4:{
        fontFamily: 'DMSans-Bold',
        fontStyle: 'normal',
        // fontWeight: '500',
        fontSize: 8 * r,
        lineHeight:20*l,
        
        color:'#FFFFFF',
        
    },
    text1:{
        fontFamily: 'DMSans-Bold',
        fontStyle: 'normal',
        // fontWeight: '500',
        fontSize: 14 * r,
        lineHeight:18*l,
        letterSpacing:0.2,
        color:'#0C1A30',
        marginTop:2*r,
    },
    text2:{
        fontFamily: 'DMSans-Bold',
        fontStyle: 'normal',
        // fontWeight: '500',
        fontSize: 12 * r,
        lineHeight:16*l,
        letterSpacing:0.2,
        color:'#FE3A30',
        marginTop:2*r,
    },

    text3:{
        fontFamily: 'DMSans-Regular',
        fontStyle: 'normal',
        // fontWeight: '500',
        fontSize: 10 * r,
        lineHeight:13*l,
        letterSpacing:0.2,
        color:'#0C1A30',
    },

})