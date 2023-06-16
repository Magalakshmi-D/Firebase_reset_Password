import React, { useState } from "react";
import { View, Text, Alert, TextInput, TouchableOpacity } from "react-native";
import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { auth } from "./firebase/firebase.config";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const login = () => {
    console.log('You clicked login...........');
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        // const user = userCredential.user;
        Alert.alert("User Login successfully");
        navigation.navigate('HomeScreen');
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Alert.alert(errorMessage);
      });
  };
  const forgot = () => {
    console.log('forgot .................');
    console.log(email,'email');
    if(email != null){
      Alert.alert('thank you enter the email ');
      sendPasswordResetEmail(auth, email)
      .then(() => {
        Alert.alert('Please check your email to reset your password link');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
    }
    else{
      Alert.alert('Please enter valid email address ')
    }
  }
  return (
    <KeyboardAwareScrollView>
      <View style={{ alignItems: 'center', margin: 30 }}>
        <Text style={{ fontWeight: '200', fontSize: 25, color: 'blue' }}>Login Here</Text>
      </View>
      <View style={{ marginHorizontal: 10 }}>
        <TextInput
          label='Email'
          style={{ marginBottom: 5, borderWidth: 1, borderColor: 'black' }}
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <TextInput
          label='Password'
          secureTextEntry={true}
          style={{ borderWidth: 1, borderColor: 'black' }}
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginVertical: 5 }}>
        <TouchableOpacity
          style={{ backgroundColor: 'blue', width: '45%', height: 50, justifyContent: 'center', alignItems: 'center' }}
          onPress={login}
        >
          <Text style={{ color: 'white', fontSize: 18 }}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ backgroundColor: 'green', width: '45%', height: 50, justifyContent: 'center', alignItems: 'center' }}
          onPress={() => navigation.navigate("SignupScreen")}
        >
          <Text style={{ color: 'white', fontSize: 18 }}>Register</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={forgot} style={{ margin: 10, alignItems: 'center' }}>
        <Text>Forgot Password</Text>
      </TouchableOpacity>
    </KeyboardAwareScrollView>
  );
};

export default LoginScreen;
