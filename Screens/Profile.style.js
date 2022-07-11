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

        marginTop: "20%",
        paddingHorizontal: "7%"
    },
    txt: {
        color: "#F96302",
        // textAlign:"center"
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontSize: 34 * r,
        fontWeight: '700',
        lineHeight: 34 * l
    },
    name:{
        color: "#222222",
        // textAlign:"center"
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontSize: 18 * r,
        fontWeight: '700',
        lineHeight: 22 * l
    },
    email:{
        color: "#9B9B9B",
        // textAlign:"center"
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontSize: 13 * r,
        fontWeight: '700',
        lineHeight: 20 * l
    },
    nm:{
        color: "#222222",
        // textAlign:"center"
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontSize: 13 * r,
        fontWeight: '700',
        lineHeight: 18 * l
    },
    bottomborder: {
        borderBottomColor: '#C6C5C5',
        borderBottomWidth: 1,
        marginVertical: "5%"
    },
    
})