import React from 'react';
import {View, Image, StyleSheet, Text, Button, TouchableHighlight, Col, KeyboardAvoidingView} from 'react-native';
import Searchbar from './searchBar/searchbar.js';
import { Icon } from 'react-native-elements'
import SearchContainer from './searchBar/searchContainer.js';


// KeyboardAvoidingView prevents components from being lifted by the keyboard popping up

function Topbar(props) {

navigation = props.navigation;

const styles = StyleSheet.create({
    container_include: {
        paddingTop: 20,
        flexDirection: 'column',
        backgroundColor: 'green',
        height: '15%',
        justifyContent: 'flex-end'
    },
    container_exclude: {
        justifyContent: 'space-around',
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
            <View style={styles.container_include}>
                <View style={styles.container_exclude}>
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
                        <Image style={styles.bar_logo} source={require('trip/assets/greenLogo.png')} />
                    </TouchableHighlight>
                    <Icon name='map' type='foundation' size={40} color="white"
                        onPress={() =>
                            navigation.navigate('Map')
                        }
                    />
                </View>
               
            </View>
        <SearchContainer/>
        </>
    );
}

export default Topbar;