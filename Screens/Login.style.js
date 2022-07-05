import { StyleSheet } from 'react-native'
import { Constants } from '../config/constants';

const z = Constants.z;

const Light=Constants.Light;
const Regular=Constants.Regular;
const Medium=Constants.Medium;
const Bold=Constants.Bold;
const Black=Constants.Black;

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'black',
    },
    bgimage: {
        flex: 1,
        justifyContent: "center",
        zIndex: 0,
        position: 'absolute',
        width: '100%',
        height: '100%',


    },
    gradientimage: {
        flex: 1,

        width: '100%',
        height: '100%',
        position: 'absolute',

    },
    container1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logocon1: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logocon2: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',

    },
    image: {
        width: '68%',
        height:'68%',
        alignSelf:'center',
    },

})