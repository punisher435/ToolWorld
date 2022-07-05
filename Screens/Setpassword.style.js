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
        justifyContent: "space-between",
        paddingHorizontal: "7%"
    },
    body1: {
        paddingHorizontal: "8%",
        marginTop: "20%"
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
    skip: {
        color: "#000000",
        // textAlign:"center"
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontSize: 13 * r,
        fontWeight: '600',
        lineHeight: 22 * l,
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
    captcha:{
        marginTop:15*r
    }
})