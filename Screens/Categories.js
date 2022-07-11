
import React, { useEffect, useState } from "react";
import auth from '@react-native-firebase/auth';
import { Text, View, TouchableOpacity, ImageBackground, Image, PixelRatio, Linking } from "react-native";
import * as Yup from "yup";
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-simple-toast';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import Ionicons from '@expo/vector-icons/Ionicons';


import { Form, FormField, SubmitButton } from "../Components/forms";

import styles from './Categories.style';
import AppTextInput from "../Components/TextInput";
import Catcard from "../Components/Catcard";




const DATA = [
    {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        title: "Wire Cutter & Stripper",
    },
    {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        title: "Wire Cutter & Stripper",
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "Wire Cutter & Stripper",
    },
    {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ca",
        title: "Wire Cutter & Stripper",
    },
    {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97fa3",
        title: "Wire Cutter & Stripper",
    },
    
];









export default function Categories() {

    return (

        <View style={styles.container}>
            <View style={styles.bg}>
                <View style={styles.body}>
                    <View style={{}}>
                        <Image style={styles.img} source={
                            require('../config/assets/backk.jpg')

                        } />
                    </View>
                    <View style={{ marginLeft: "30%" }}>
                        <Text style={styles.cat}>
                            Categories
                        </Text>
                    </View>
                </View>

                <View style={styles.body1}>
                
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
                </View>
            </View>



        </View>

    );
}








