import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import Topbar from 'trip/Components/topbar.js';

function MapPage({navigation}) {

    return (
        <>
        <Topbar navigation={navigation}/>
        <Text>I am a map</Text>
        </>
    );
}

export default MapPage;