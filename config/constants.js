import { StyleSheet, PixelRatio,Dimensions } from 'react-native'

const x=PixelRatio.get();
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

console.log(height);
console.log(x);
const zz=(3/3.5)*(width/411.4);

export const Constants= {
    y:3,
    z:(3/3.5)*(width/411.4),
    z1:(3/3.5)*(height/754),
    w:height/754,
    r:(width/411.4),
    l:(width/411.4),
    m:(width/411.4),
    width:width,
    Thin:'Roboto-Thin',
    Light:'Roboto-Light',
    Regular:'Roboto-Regular',
    Medium:'Roboto-Medium',
    Bold:'Roboto-Bold',
    Black:'Roboto-Black',
 
    
    screen:{
        height:height,
      
    },
    
}