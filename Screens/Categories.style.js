import { StyleSheet } from 'react-native'
import { Constants } from '../config/constants';

const z = Constants.z;
const r = Constants.r;
const l = Constants.l;
const Light = Constants.Light;
const Regular = Constants.Regular;
const Medium = Constants.Medium;
const Bold = Constants.Bold;
const Black = Constants.Black;

export default StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor:'white',
        // justifyContent:"center"
    },
    bg: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',

    },
    body: {
        flexDirection: "row",
        marginTop: "20%",
        paddingHorizontal: "7%"
    },
    img:{
        width:11.4*r,
        height:19.99*r
    },
    cat:{
        color: "#000000",
        // textAlign:"center"
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontSize: 22 * r,
        fontWeight: '500',
        lineHeight: 28 * l,
    },
    body1: {
        paddingHorizontal: "6%",
        marginTop: "10%"
    },
    btn: {
        marginTop: "13%"
    },
    account: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: "60%"
    },
    txt: {
        color: "#F96302",
        // textAlign:"center"
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontSize: 28 * r,
        fontWeight: '700',
        lineHeight: 34 * l
    },
    txt1: {
        color: "#000000",
        // textAlign:"center"
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontSize: 17 * r,
        fontWeight: '500',
        lineHeight: 22 * l
    },
    formfield: {
        marginBottom: 10 * r,
        // paddingHorizontal:40*z ,//  changed from 25 to 40*z
        marginTop: 5 * r,
    },
    

    pass: {
        color: "#F96302",
        // textAlign:"center"
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontSize: 13 * r,
        fontWeight: '600',
        lineHeight: 22 * l,
    },
    sign: {
        color: "#000000",
        // textAlign:"center"
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontSize: 13 * r,
        fontWeight: '600',
        lineHeight: 22 * l,
    },
    acc: {
        color: "#353636",
        // textAlign:"center"
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontSize: 13 * r,
        fontWeight: '600',
        lineHeight: 22 * l,
    },
    reg: {
        color: "#000000",
        // textAlign:"center"
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontSize: 13 * r,
        fontWeight: '600',
        lineHeight: 22 * l,
        textDecorationLine:"underline"
    },
    txtt: {
        color: "#353636",
        // textAlign:"center"
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontSize: 15 * r,
        fontWeight: '600',
        lineHeight: 22 * l,
    },


    //catcard

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