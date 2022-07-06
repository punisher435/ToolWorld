
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
import styles from './Setpassword.style';
import AppTextInput from "../Components/TextInput";










const validationSchema = Yup.object().shape({


    Email: Yup.string().required().email('Must be a valid email').label("Email"),
    Captcha: Yup.string().required().min(4).label("Captcha"),
});




export default function Setpassword() {

    return (

        <View style={styles.container}>
            <View style={styles.bg}>
                <View style={styles.body}>
                    <View  style={{}}>
                        <Image style={{}} source={
                            require('../config/assets/backk.jpg')

                        } />
                    </View>
                    {/* <View style={{}} >
                    <TouchableOpacity>
                        <Text style={styles.skip}>SKIP</Text>
                        </TouchableOpacity>
                    </View> */}
                </View>

                <View style={styles.body1}>
                    <View >
                        <Text style={styles.txt}>Set your Password?</Text>
                    </View>
                    <View>
                        <Text style={styles.txt1}>Please Enter your Email Address. Your will Receive a link to Create a new Password via email.</Text>
                    </View>

                    <View style={{ marginTop: "10%" }}>
                        <Form
                            initialValues={{
                                Email: "",
                                Password: "",
                            }}
                            // onSubmit={submitform}
                            validationSchema={validationSchema}
                        >
                            <View>
                                <Text style={styles.txtt}>Email Address*</Text>
                            </View>
                            <View style={styles.formfield}>
                                <FormField
                                    autoCapitalize="none"
                                    autoCorrect={false}


                                    name="Email"
                                // holder="Email Address*"

                                />
                            </View>
                            <View style={styles.captcha}>
                                <Image source={require("../config/assets/captcha.png")}/>
                            </View>
                            <View style={{ marginTop: 7 }}>
                                <Text style={styles.txtt}>Please Enter Captcha*</Text>
                            </View>
                            <View style={styles.formfield}>
                                <FormField
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    width="60%"
                                    name="Captcha"
                                // holder="Password*"

                                />

                            </View>

                            
                            <View style={styles.btn}>
                                <SubmitButton title="Send" />
                            </View>

                            

                        </Form>
                    </View>
                </View>
            </View>

        </View>

    );
}








