import React, { useEffect, useState } from "react";
import auth from '@react-native-firebase/auth';
import { Text, View, TouchableOpacity, ImageBackground, Image, PixelRatio, Linking, TextInput } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import * as Yup from "yup";
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-simple-toast';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from "./Home.style";
export default function Home() {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}>
                <View style={styles.bg}>
                    <View style={styles.body}>

                        <TouchableOpacity>
                            <Image source={require('../config/assets/hamburger.png')} style={styles.ham}>

                            </Image>
                        </TouchableOpacity>
                        <View>
                            <Image source={require('../config/assets/logo.png')} style={styles.logo}>

                            </Image>
                        </View>

                        <View>
                            <Image source={require('../config/assets/bell.png')} style={styles.bell}>

                            </Image>
                        </View>
                        <View>
                            <Image source={require('../config/assets/cart.png')}>

                            </Image>
                        </View>
                    </View>

                    <View style={styles.txt}>
                        <TextInput
                            style={styles.txtip}
                            placeholder="Search Product Name"
                            placeholderTextColor="#C4C5C4"
                        >
                        </TextInput>

                        <Image source={require('../config/assets/search.png')} style={styles.search}>

                        </Image>
                    </View>
                    <View>
                        <ScrollView scrollEventThrottle={16}>
                            <View style={{ flex: 1, marginTop: 5 }}>
                                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                    <Image source={require('../config/assets/hpimg.png')} style={{ flex: 1, resizeMode: 'cover' }} >

                                    </Image>
                                    <Image source={require('../config/assets/hpimg.png')} style={{ flex: 1, resizeMode: 'cover' }} >

                                    </Image>
                                    <Image source={require('../config/assets/hpimg.png')} style={{ flex: 1, resizeMode: 'cover' }} >

                                    </Image>

                                </ScrollView>
                            </View>
                        </ScrollView>
                    </View>

                    <View>

                        <View style={{ flexDirection: "row", paddingHorizontal: "6%", justifyContent: "space-between" }}>
                            <View >
                                <Text style={styles.cat}>Categories</Text>
                            </View>
                            <View>
                                <TouchableOpacity>
                                    <Text style={styles.see}>
                                        See All
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.item}>
                            <TouchableOpacity>
                                <Image source={require('../config/assets/Icon_Box.png')}  >

                                </Image>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image source={require('../config/assets/Icon_Box.png')}  >

                                </Image>
                            </TouchableOpacity><TouchableOpacity>
                                <Image source={require('../config/assets/Icon_Box.png')}  >

                                </Image>
                            </TouchableOpacity><TouchableOpacity>
                                <Image source={require('../config/assets/Icon_Box.png')}  >

                                </Image>
                            </TouchableOpacity><TouchableOpacity>
                                <Image source={require('../config/assets/Icon_Box.png')}  >

                                </Image>
                            </TouchableOpacity>
                        </View>

                        <View style={{ flexDirection: "row", paddingHorizontal: "6%", justifyContent: "space-between", marginTop: "7%" }}>
                            <View >
                                <Text style={styles.cat}>Featured Product</Text>
                            </View>
                            <View>
                                <TouchableOpacity>
                                    <Text style={styles.see}>
                                        See All
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ paddingHorizontal: "6%", marginTop: "5%" }}>
                            <Image source={require('../config/assets/Banner.png')} style={{ width: 380 }} >

                            </Image>
                        </View>

                        <View style={{ paddingHorizontal: "6%", marginTop: "5%", flexDirection: "row", justifyContent: "space-between" }}>
                            <View>
                                <Image source={require('../config/assets/Group.png')} >

                                </Image>
                            </View>
                           
                            <View>
                                <Image source={require('../config/assets/Group.png')} >

                                </Image>
                            </View>

                        </View>
                        <View style={{ flexDirection: "row", paddingHorizontal: "6%", justifyContent: "space-between", marginTop: "7%" }}>
                            <View >
                                <Text style={styles.cat}>Trending Products</Text>
                            </View>
                            <View>
                                <TouchableOpacity>
                                    <Text style={styles.see}>
                                        See All
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{ paddingHorizontal: "6%", marginTop: "5%" }}>
                            <Image source={require('../config/assets/Banner.png')} style={{ width: 380 }} >

                            </Image>
                        </View>

                        <View style={{ paddingHorizontal: "6%", marginTop: "5%", flexDirection: "row", justifyContent: "space-between" }}>
                            <View>
                                <Image source={require('../config/assets/Group.png')} >

                                </Image>
                            </View>
                           
                            <View>
                                <Image source={require('../config/assets/Group.png')} >

                                </Image>
                            </View>

                        </View>
                    </View>

                </View>


                <View style={{ height: 100, width: '100%', }}>

                </View>
            </ScrollView>
        </View>
    )
}