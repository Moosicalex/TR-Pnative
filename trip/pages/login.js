import {React, useState} from 'react';
import {View, Image, StyleSheet, Text, TextInput, SafeAreaView, ImageBackground} from 'react-native';
import Topbar from 'trip/Components/topbar.js';

function Login({navigation}) {

    const [email, setEmail] = useState("email")
    const [password, setPassword] = useState("password") 

    const styles = StyleSheet.create({
        input: {

        },
        input_container: {
            backgroundColor: 'blue'
        },
        container: {
            flexDirection: 'column',
            justifyContent: 'center',
            height: '90%'
        },
        login: {
            flexDirection: 'column',
        },

    })

    //const background = {require('trip/assets/background.jpg')};

    return (
        <SafeAreaView style={styles.login}>
            <Topbar navigation={navigation}/>
            <ImageBackground source={require('trip/assets/background.jpg')} resizeMode="cover" style={styles.container} >
                <SafeAreaView style={styles.input_container}>
                    <TextInput
                        style={styles.input}
                        onChangeText={setEmail}
                        value={email}
                    />
                </SafeAreaView>
            </ImageBackground>
        </SafeAreaView>
    );
}

export default Login;