import React from 'react';
import {View, Image, StyleSheet, Text, Button, TouchableHighlight} from 'react-native';
import Searchbar from './searchbar.js';

function Topbar(props) {

navigation = props.navigation;

const styles = StyleSheet.create({
    container: {
        paddingTop: 15,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        height: '15%',
    },
    bar_logo: {
        height: 50,
        width: 100,
        resizeMode: 'cover',
    }
});
    return (
        <>
        <View style={styles.container}>
            <Button
                title="Go to Profile page"
                onPress={() =>
                    navigation.navigate('Profile')
                }
            />
            <TouchableHighlight
                onPress={() =>
                    navigation.navigate('Home')
                }
            >
                <Image
                    style={styles.bar_logo}
                    source={require('trip/assets/greenLogo.png')}
                />
            </TouchableHighlight>
            <Searchbar/>
        </View>
        </>
    );
}

export default Topbar;