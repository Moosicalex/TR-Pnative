import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import Topbar from 'trip/Components/topbar.js';
import Map from '../Components/map';

function MapPage({navigation}) {

    const getRnd = (min, max) => {
        decimalAddition = (Math.random() * (1000) )/1000
        return Math.floor(Math.random() * (max - min) ) + min + decimalAddition
    }

    return (
        <>
        <Topbar navigation={navigation}/>
        <Map userCenterSearch={{geometry:{location:{lat:getRnd(-90,90), lng:getRnd(-180,180)}}}}></Map>
        </>
    );
}

export default MapPage;