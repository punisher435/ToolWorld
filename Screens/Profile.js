
import React, { useEffect, useState } from "react";
import auth from '@react-native-firebase/auth';
import { Text, View, TouchableOpacity, ImageBackground, Image, PixelRatio, Linking } from "react-native";
import * as Yup from "yup";
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-simple-toast';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import Ionicons from '@expo/vector-icons/Ionicons';



import styles from './Profile.style';
import AppTextInput from "../Components/TextInput";














export default function Profile() {

    return (

        <View style={styles.container}>
            <View style={styles.bg}>
                <View style={styles.body}>
                    <View>
                        <Image source={require('../config/assets/search.png')} style={{ marginLeft: 330 }}>

                        </Image>
                    </View>
                    <View style={{ marginTop: "15%" }}>
                        <Text style={styles.txt}>My Profile</Text>
                    </View>

                    <View style={{ flexDirection: "row", marginTop: "5%" }}>
                        <View>
                            <Image source={require('../config/assets/profile.png')}>

                            </Image>
                        </View>
                        <View>
                            <Text style={styles.name}>Matilda Brown</Text>
                            <Text style={styles.email}>brown@gmail.com</Text>
                            <Text style={styles.email}>+91 012345789</Text>

                        </View>
                    </View>

                    <View style={{ marginTop: "10%" }}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <View>
                                <TouchableOpacity>
                                    <Text style={styles.nm}>My Profile</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity>
                                    <Image source={require('../config/assets/forward.png')} ></Image>
                                </TouchableOpacity>
                            </View>


                        </View>
                        <View
                            style={styles.bottomborder}
                        />
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <View>
                                <TouchableOpacity>
                                    <Text style={styles.nm}>My Orders</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity>
                                    <Image source={require('../config/assets/forward.png')} ></Image>
                                </TouchableOpacity>
                            </View>


                        </View>
                        <View
                            style={styles.bottomborder}
                        />
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <View>
                                <TouchableOpacity>
                                    <Text style={styles.nm}>My Address</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity>
                                    <Image source={require('../config/assets/forward.png')} ></Image>
                                </TouchableOpacity>
                            </View>


                        </View>
                        <View
                            style={styles.bottomborder}
                        />
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <View>
                                <TouchableOpacity>
                                    <Text style={styles.nm}>My Notification</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity>
                                    <Image source={require('../config/assets/forward.png')} ></Image>
                                </TouchableOpacity>
                            </View>


                        </View>
                        <View
                            style={styles.bottomborder}
                        />
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <View>
                                <TouchableOpacity>
                                    <Text style={styles.nm}>Logout</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity>
                                    <Image source={require('../config/assets/forward.png')} ></Image>
                                </TouchableOpacity>
                            </View>


                        </View>
                        <View
                            style={styles.bottomborder}
                        />
                    </View>
                    

                </View>
                <View style={{marginTop:"40%"}}>
                    <Image source={require('../config/assets/Tabbar.png')} style={{width:400}} ></Image>
                    </View>
            </View>

        </View>

    );
}








