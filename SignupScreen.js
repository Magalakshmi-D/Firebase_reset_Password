import React, { useState } from "react";
import { View, Text, Alert, TextInput, TouchableOpacity } from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase/firebase.config";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const SignupScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signup = () => {
        console.log('You clicked signup...........');
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                // const user = userCredential.user;
                Alert.alert("User Created successfully");
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                Alert.alert(errorMessage);
            });
    };

    return (
        <KeyboardAwareScrollView>
            <View style={{ alignItems: 'center', margin: 30 }}>
                <Text style={{ fontWeight: '200', fontSize: 25, color: 'blue' }}>Register Here</Text>
            </View>
            <View style={{ marginHorizontal: 10 }}>
                <TextInput
                    placeholder='Email'
                    style={{ marginBottom: 5, borderWidth: 1, borderColor: 'black' }}
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                />
                <TextInput
                    placeholder='Password'
                    secureTextEntry={true}
                    style={{ borderWidth: 1, borderColor: 'black' }}
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginVertical: 5 }}>
                <TouchableOpacity
                    style={{ backgroundColor: 'green', width: '45%', height: 50, justifyContent: 'center', alignItems: 'center' }}
                    onPress={() =>signup()}
                >
                    <Text style={{ color: 'white', fontSize: 18 }}>Register</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ backgroundColor: 'blue', width: '45%', height: 50, justifyContent: 'center', alignItems: 'center' }}
                    onPress={()=>navigation.navigate("LoginScreen")}
                >
                    <Text style={{ color: 'white', fontSize: 18 }}>Login</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAwareScrollView>
    );
};

export default SignupScreen;
