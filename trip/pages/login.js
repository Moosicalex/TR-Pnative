import {React, useState} from 'react';
import {View, Image, StyleSheet, Text, TextInput, SafeAreaView} from 'react-native';
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
            backgroundColor: 'gray',
            flexDirection: 'column',
            justifyContent: 'center',
            height: '85%'
        },

    })

    return (
        <>
            <Topbar navigation={navigation}/>
            <SafeAreaView style={styles.container} >
                <SafeAreaView style={styles.input_container}>
                    <TextInput
                        style={styles.input}
                        onChangeText={setEmail}
                        value={email}
                    />
                </SafeAreaView>
            </SafeAreaView>
        </>
    );
}

export default Login;