import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

import styles from './Catcard.style';

export default function Catcard() {
  const navigation = useNavigation();


  return (
    <TouchableOpacity style={styles.container1}>

    <ImageBackground source={require('../config/assets/Rectangle_HomeCard1.png')} resizeMode="cover" style={styles.bgimage}>
        <View style={styles.flexrow}>
            <View style={styles.imgcon}>
                <View style={styles.shadow}>
                    <Image source={require('../config/assets/Img_Holder.png')} style={styles.coverimage}>

                    </Image>


                </View>
            </View>

            <View>
            <Image source={require('../config/assets/vec1.png')} style={styles.onimg}></Image>
            </View>

            <View>
                <View>
                    <Text style={styles.ontxt}>Wire Cutter & Stripper</Text>
                </View>
                <View>
                    <Text style={styles.prod}>12 Products</Text>
                </View>
            </View>

            <View>
            <Image source={require('../config/assets/forward.png')} style={styles.forward}></Image>
            </View>
            
        </View>
    </ImageBackground>
</TouchableOpacity>
  )
}