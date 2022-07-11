import { StyleSheet } from 'react-native'
import { Constants } from '../config/constants';
import defaultStyles from "../config/styles";
import Colors from '../config/colors';
import { ScaledSheet } from 'react-native-size-matters';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const z = Constants.z;
const l=Constants.l;
const r=Constants.r;
const Light=Constants.Light;
const Regular=Constants.Regular;
const Medium=Constants.Medium;
const Bold=Constants.Bold;
const Black=Constants.Black;

export default StyleSheet.create({
    container1: {
        width: '100%',
        height: 122 * r,
        borderRadius: 6 * r,
        overflow: 'hidden',
    
    },
    flexrow: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20 * r,

    },
    bgimage: {
        flex: 1,



        width: '100%',
        height: '100%',


    },
    coverimage: {

        width: '100%',
        height: '100%',
        borderRadius: 6 * z,

        zIndex: 0,

    },

    iconimage: {
        width:32*r,
        height:32*r


    },
    iconcon: {
        marginLeft: 30 * r,
    },
    imgcon: {
        width: '30%',
        height: '70%',






    },
    shadow: {
        width: '80%',
        height: '100%',

        alignItems: 'center',

        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 20,
        shadowOpacity: 1,
        elevation: 20,
        backgroundColor: '#FFFFFF',
        borderRadius: 6 * r,

    },
    onimg:{
        position:"absolute",
        marginLeft:-85*r,
        marginTop:-17*r
    },
    ontxt:{
        color: "#000000",
        // textAlign:"center"
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontSize: 13 * r,
        fontWeight: '500',
        lineHeight: 18 * l,   
    },
    prod:{
        color: "#353636",
        // textAlign:"center"
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontSize: 11 * r,
        fontWeight: '500',
        lineHeight: 13 * l,
    },

    forward:{
        marginLeft:50*r
    }
})