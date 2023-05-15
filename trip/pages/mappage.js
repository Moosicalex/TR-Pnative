import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import Topbar from 'trip/Components/topbar.js';
import Map from '../Components/map';

function MapPage({navigation}) {

    const getRnd = (min, max) => {
        decimalAddition = (Math.random() * (1000) )/1000
        let coord = Math.floor(Math.random() * (max - min) ) + min + decimalAddition
        console.log(coord)
        return coord
    }

    return (
        <>
        <Topbar navigation={navigation}/>
        <Map userCenterSearch={{geometry:{location:{lat:getRnd(-90,90), lng:getRnd(-180,180)}}, formulated_address:"Big Tones Bones"}}></Map>
        </>
    );
}

export default MapPage;