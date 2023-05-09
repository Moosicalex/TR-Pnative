import React from 'react';
import {View, Image, StyleSheet, Text, Button, TouchableHighlight, Col} from 'react-native';
import Searchbar from './searchbar.js';
import { Icon } from 'react-native-elements'

function Topbar(props) {

navigation = props.navigation;

const styles = StyleSheet.create({
    container: {
        paddingTop: 15,
        backgroundColor: 'green',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '15%',
        flexDirection: 'row',
    },
    bar_logo: {
        height: 50,
        width: 100,
        resizeMode: 'cover',
    },
    profile_button: {

    }
});
    return (
        <>
        <View style={styles.container}>
            <Icon name="torso" type="foundation" size={40} color="white"
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
            <Icon name='map' type='foundation' size={40} color="white"
                onPress={() =>
                    navigation.navigate('Map')
                }
            />
            <Searchbar/>
        </View>
        </>
    );
}

export default Topbar;