import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import Topbar from 'trip/Components/topbar.js';
import Map from '../Components/map';

function MapPage({navigation}) {

    return (
        <>
        <Topbar navigation={navigation}/>
        <Map></Map>
        </>
    );
}

export default MapPage;