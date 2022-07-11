
import React, { useEffect, useState } from "react";
import auth from '@react-native-firebase/auth';
import { Text, View, TouchableOpacity, ImageBackground, Image, PixelRatio, Linking } from "react-native";
import * as Yup from "yup";
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-simple-toast';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView } from 'react-native-gesture-handler';
import CheckBox from '@react-native-community/checkbox';
// import Ionicons from '@expo/vector-icons/Ionicons';


import { Form, FormField, SubmitButton } from "../components/forms";

import styles from './Signup.style';
import AppTextInput from "../components/TextInput";










const validationSchema = Yup.object().shape({


    Email: Yup.string().required().email('Must be a valid email').label("Email"),
    Password: Yup.string().required().min(8).label("Password"),
    Confirm_Password: Yup.string()
        .oneOf([Yup.ref('Password'), null], 'Passwords must match'),
    Full_name: Yup.string().required().label("Full Name"),
    Company_name: Yup.string().required().label("Company Name"),
    State: Yup.string().required().label("state"),
    GSTIN: Yup.string().required().label("GSTIN"),
    Mobile_number: Yup.string().required().min(10).max(10).label("Mobile Number"),
    Zip: Yup.string().required().min(6).max(6).label("Zip"),
    Address: Yup.string().required().label("Address")
});




export default function Signup() {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const navigation = useNavigation();
    return (

        <View style={styles.container}>
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}>
                <View style={styles.bg}>
                    <View style={styles.body}>
                        <View style={{}}>
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
                            <Text style={styles.txt}>Create an Account</Text>
                        </View>
                        <View>
                            <Text style={styles.txt1}>New users,please register here</Text>
                        </View>

                        <View style={{ marginTop: "10%" }}>
                            <Form
                                initialValues={{
                                    Email: "",
                                    Full_name: "",
                                    Password: "",
                                    Company_name: "",
                                    GSTIN: "",
                                    Confirm_Password: "",
                                    Mobile_number: "",
                                    Zip: "",
                                    State: "",
                                    Address: ""
                                }}
                                // onSubmit={submitform}
                                validationSchema={validationSchema}
                            >
                                <View >
                                    <Text style={styles.txtt}>Full Name:</Text>
                                </View>
                                <View style={styles.formfield}>
                                    <FormField
                                        autoCapitalize="none"
                                        autoCorrect={false}


                                        name="Full_name"
                                    // holder="Email Address*"

                                    />
                                </View>

                                <View style={{ marginTop: 7 }}>
                                    <Text style={styles.txtt}>Email Address:</Text>
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
                                    <Text style={styles.txtt}>Company Name:(optional)</Text>
                                </View>
                                <View style={styles.formfield}>
                                    <FormField
                                        autoCapitalize="none"
                                        autoCorrect={false}


                                        name="Company_name"
                                    // holder="Password*"

                                    />

                                </View>
                                <View style={{ marginTop: 7 }}>
                                    <Text style={styles.txtt}>GSTIN: (if applicable, optional)</Text>
                                </View>
                                <View style={styles.formfield}>
                                    <FormField
                                        autoCapitalize="none"
                                        autoCorrect={false}


                                        name="GSTIN"
                                    // holder="Password*"

                                    />

                                </View>
                                <View style={{ marginTop: 7 }}>
                                    <Text style={styles.txtt}>Mobile Number:</Text>
                                </View>
                                <View style={styles.formfield}>
                                    <FormField
                                        autoCapitalize="none"
                                        autoCorrect={false}


                                        name="Mobile_number"
                                    // holder="Password*"

                                    />

                                </View>
                                <View style={{ marginTop: 7 }}>
                                    <Text style={styles.txtt}>Password:</Text>
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
                                <View style={{ marginTop: 7 }}>
                                    <Text style={styles.txtt}>Confirm Password:</Text>
                                </View>
                                <View style={styles.formfield}>
                                    <FormField
                                        autoCapitalize="none"
                                        autoCorrect={false}
                                        secureTextEntry={true}

                                        name="Confirm_Password"
                                    // holder="Password*"

                                    />

                                </View>
                                <View style={{ marginTop: 7 }}>
                                    <Text style={styles.txtt}>Address:</Text>
                                </View>
                                <View style={styles.formfield}>
                                    <FormField
                                        autoCapitalize="none"
                                        autoCorrect={false}


                                        name="Address"
                                    // holder="Password*"

                                    />

                                </View>
                                <View style={{ marginTop: 7 }}>
                                    <Text style={styles.txtt}>State:</Text>
                                </View>
                                <View style={styles.formfield}>
                                    <FormField
                                        autoCapitalize="none"
                                        autoCorrect={false}


                                        name="State"
                                    // holder="Password*"

                                    />

                                </View>
                                <View style={{ marginTop: 7 }}>
                                    <Text style={styles.txtt}>Zip:</Text>
                                </View>
                                <View style={styles.formfield}>
                                    <FormField
                                        autoCapitalize="none"
                                        autoCorrect={false}


                                        name="Zip"
                                    // holder="Password*"

                                    />

                                </View>

                                <View style={{ flexDirection: "row" }}>
                                    <View>
                                        <CheckBox
                                            disabled={false}
                                            value={toggleCheckBox}
                                            onValueChange={(newValue) => setToggleCheckBox(newValue)}
                                            tintColors={{ true: '#F15927', false: 'black' }}
                                            
                                            style={styles.check}
                                        />
                                    </View>
                                    <View>
                                        <Text style={styles.acc}>I have accept </Text>
                                    </View>
                                    <View>
                                        <TouchableOpacity>
                                            <Text style={styles.reg1}>Terms & Conditions</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>

                                <View style={styles.btn}>
                                    <SubmitButton title="Register" />
                                </View>

                                <View style={styles.account}>
                                    <View>
                                        <Text style={styles.acc}>Have an account?</Text>
                                    </View>
                                    <View>
                                        <TouchableOpacity onPress={() => {navigation.navigate("Login")}}>
                                            <Text style={styles.reg}>LOGIN</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>

                            </Form>
                        </View>
                    </View>
                </View>
                <View style={{ height: 50, width: '100%', }}>

                </View>
            </ScrollView>
        </View>

    );
}








