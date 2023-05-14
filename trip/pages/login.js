import {React, useState} from 'react';
import {View, Image, StyleSheet, Text, TextInput, SafeAreaView, ImageBackground} from 'react-native';
import Topbar from 'trip/Components/topbar.js';
import { Icon } from 'react-native-elements'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

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
        login_button: {
            
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
                    <TextInput
                        style={styles.input}
                        onChangeText={setPassword}
                        value={password}
                    />
                    <View style={styles.login_button}>
                        <Icon name='map' type='foundation' size={40} color="white"
                            onPress={() =>
                                navigation.navigate('Map')
                            }
                        />
                    </View>
                </SafeAreaView>
            </ImageBackground>
        </SafeAreaView>
    );
}

export default Login;