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
    acc: {
        color: "#353636",
        // textAlign:"center"
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontSize: 13 * r,
        fontWeight: '600',
        lineHeight: 22 * l,
    },
    body: {
        flexDirection: "row",
        marginTop: "20%",
        paddingHorizontal: "6%",
        justifyContent: "space-between"
    },
    logo: {
        width: 118 * r,
        height: 71 * r,
        marginTop: -40 * r,
        marginLeft: 80 * r
    },
    bell: {
        marginLeft: 40 * r
    },
    scrollView: {
        height: '90%',
        // padding:'5%',
    },
    txt:{
        paddingHorizontal:"6%",
        marginTop:40*r
    },
    txtip: {
        borderWidth: 1,
        borderRadius: 10 * r,
        borderColor: 'white',
        backgroundColor:"#FAFAFA",
        width: '100%',
        height: 50 * r, // changed from 65 to 58
        // paddingLeft: 10*z,
        fontSize: 18 * z,
        marginTop: 1 * z, //changed from 5 to 1
        paddingTop: 10 * z,
        paddingBottom: 0,
        marginBottom: 0,
        color: "#C4C5C4",

        fontFamily: Medium,
        lineHeight: 21 * l,
        paddingLeft: "2%"
    },

    search:{
        position:"absolute",
        marginLeft:340*r,
        marginTop:16*r
    },

    cat:{
        color: "#0C1A30",
        // textAlign:"center"
        fontFamily: "DM Sans",
        fontStyle: "normal",
        fontSize: 16 * r,
        fontWeight: '500',
        lineHeight: 25 * l,
    },
    see:{
        color: "#F96302",
        // textAlign:"center"
        fontFamily: "DM Sans",
        fontStyle: "normal",
        fontSize: 12 * r,
        fontWeight: '600',
        lineHeight: 22 * l,
    },
    item:{ 
        flexDirection: "row", 
        paddingHorizontal: "6%", 
        justifyContent:"space-around",
        marginTop:"7%" 
    }
})