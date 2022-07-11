import { StyleSheet, Dimensions } from 'react-native'
import { Constants } from '../config/constants';

const z = Constants.z;
const r = Constants.r;
const l=Constants.l;

const Light=Constants.Light;
const Regular=Constants.Regular;
const Medium=Constants.Medium;
const Bold=Constants.Bold;
const Black=Constants.Black;
const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
   
    container: {

    },
    cardView: {

        width: width - 20,
        height: 3 * (height / 5),
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5,
    },

    textView: {
        position: 'absolute',
        bottom: 10,
        margin: 10,
        left: 5,
    },
    
    itemTitle: {
        color: 'white',
        fontSize: 22,
        shadowColor: '#000',
        shadowOffset: { width: 0.8, height: 0.8 },
        shadowOpacity: 1,
        shadowRadius: 3,
        marginBottom: 5,
        fontWeight: "bold",
        elevation: 5
    },
    itemDescription: {
        color: 'white',
        fontSize: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0.8, height: 0.8 },
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 5
    },

    textarea: {
        width: width - 20,
        textAlign: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginLeft: 10,
        
    },


    itemTitle1: {
        color: 'black',
        fontSize:22,

        textAlign: 'center',
        justifyContent: 'center',
        fontWeight: "bold",
        fontFamily:'notoserif',

    },
    itemDescription1: {
        color: 'grey',
        fontSize: 12,
        textAlign: 'center',
        justifyContent: 'center',
        marginTop: 10,
        
    },
    text1:{
        fontFamily: 'Lato-Bold',
        fontStyle: 'normal',
        // fontWeight: '500',
        fontSize: 21 * r,
        lineHeight:25*l,
        color:'#333333',
        marginLeft:32*r,
    },
    text2:{
        fontFamily: 'Lato-Bold',
        fontStyle: 'normal',
        // fontWeight: '500',
        fontSize: 14 * r,
        lineHeight:17*l,
        color:'#333333',
        
    },
    image1:{
        
        
        
    padding:10*r,
    
   
       
    },
    image2:{
       
        width:44*r,
        height:44*r,
       
    },
    image12:{
        position:'absolute',
       
        bottom:240*r,
        right:21*r,
    },
    image: {
        marginLeft:20*r,
        marginTop:100*r,
        width:339*r,
        height:306*r,
    },
    con1:{
        width:width,
    },
    textcon1:{
        marginTop:80*r,
        width:183*r,
        marginLeft:32*r,
        marginBottom:10*r,
    },
    textcon2:{
        width:268*r,
        marginLeft:32*r,
    },
    text3:{
        fontFamily: 'PlayfairDisplay-Black',
        fontStyle: 'normal',
        // fontWeight: '500',
        fontSize: 28.67 * r,
        lineHeight:38*l,
        textTransform:'capitalize',
        color:'#333333',
        
    },
    text4:{
        fontFamily: 'Lato-Light',
        fontStyle: 'normal',
        // fontWeight: '500',
        fontSize: 14 * r,
        textTransform:'capitalize',
        lineHeight:17*l,
        color:'#333333',
        
    },
})