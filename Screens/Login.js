
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

import styles from './Login.style';
import AppTextInput from "../Components/TextInput";










const validationSchema = Yup.object().shape({


    Email: Yup.string().required().email('Must be a valid email').label("Email"),
    Password: Yup.string().required().min(8).label("Password"),
});




export default function Login() {

    return (

        <View style={styles.container}>
            <View style={styles.bg}>
                <View style={styles.body}>
                    <View  style={{}}>
                        <Image style={{}} source={
                            require('../config/assets/backk.jpg')

                        } />
                    </View>
                    <View style={{}} >
                    <TouchableOpacity>
                        <Text style={styles.skip}>SKIP</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.body1}>
                    <View >
                        <Text style={styles.txt}>Let's Sign You In</Text>
                    </View>
                    <View>
                        <Text style={styles.txt1}>Existing users,please login in here to continue</Text>
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
                            <View style={{ marginTop: 7 }}>
                                <Text style={styles.txtt}>Password*</Text>
                            </View>
                            <View style={styles.formfield}>
                                <FormField
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    secureTextEntry={true}

                                    name="Password"
                                // holder="Password*"

                                />

                            </View>

                            <View style={{ flexDirection: "row", marginTop: "3%" }}>
                                <View style={{ flexDirection: "column" }}>
                                    <View style={{ flexDirection: "row" }}>
                                        <View style={{ flexDirection: "column" }}>
                                            <Image source={require('../config/assets/BG.png')}></Image>
                                        </View>
                                        <View style={{ flexDirection: "column" }}>
                                            <Text style={styles.sign}>Keep me signed In</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ flexDirection: "column", marginLeft: "28%" }} >
                                    <TouchableOpacity>
                                        <Text style={styles.pass}>Forgot Password</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={styles.btn}>
                                <SubmitButton title="Login" />
                            </View>

                            <View style={styles.account}>
                                <View>
                                    <Text style={styles.acc}>Don't have an account?</Text>
                                </View>
                                <View>
                                    <TouchableOpacity onPress={{}}>
                                        <Text style={styles.reg}>REGISTER</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                        </Form>
                    </View>
                </View>
            </View>

        </View>

    );
}








