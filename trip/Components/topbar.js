import React from 'react';
import {View, Image, StyleSheet, Text, Button, KeyboardAvoidingView} from 'react-native';
import Searchbar from './searchBar/searchbar.js';
import SearchContainer from './searchBar/searchContainer.js';

function Topbar(props) {

navigation = props.navigation;

const styles = StyleSheet.create({
    container: {
        paddingTop: 15,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        height: '20%',
    },
    bar_logo: {
        height: 50,
        width: 100,
        resizeMode: 'cover',
        flexShrink:1
    },
    button: {
        flexShrink:1

    },
});
    return (
        <>
        <KeyboardAvoidingView>
        <View style={styles.container}>
            <Button
                title="Go to Profile page"
                onPress={() =>
                    navigation.navigate('Profile')
                }
                style={styles.button
                }
            />
            <Image
                style={styles.bar_logo}
                source={require('trip/assets/greenLogo.png')}
            />
           
        </View>
        <SearchContainer/>
        </KeyboardAvoidingView>
        </>
    );
}

export default Topbar;