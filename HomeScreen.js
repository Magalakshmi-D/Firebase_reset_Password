import React, { useEffect } from "react";
import {View,Text, TouchableOpacity} from 'react-native';
import { signOut } from "firebase/auth";
import { auth } from "./firebase/firebase.config";
// new cmd 
const HomeScreen=({navigation})=>{
    useEffect(()=>{
        console.log('You are entering home screen...........');
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={()=>logout()}>
                    <Text>Logout</Text>
                </TouchableOpacity>
            ),
          });
        const logout=()=>{
            signOut(auth)
            .then(() => {
                navigation.replace('LoginScreen');
              }).catch((error) => {
                // An error happened.
              });
        }
    },[]);
    return(
        <View>
            <Text>
                HomeScreen
            </Text>
        </View>
    )
}

export default HomeScreen;