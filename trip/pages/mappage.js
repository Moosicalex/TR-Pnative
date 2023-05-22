import React, {useState} from 'react'
import {View, Image, StyleSheet, Text} from 'react-native';
import Topbar from 'trip/Components/topbar.js';
import Map from '../Components/map';

function MapPage(props) {

    const centerLocation = props.route.params.details
    centerLocation.type = "food"

    const getRnd = (min, max) => {
        decimalAddition = (Math.random() * (1000) )/1000
        let coord = Math.floor(Math.random() * (max - min) ) + min + decimalAddition
        console.log(coord)
        return coord
    }

    return (
        <>
        <Topbar navigation={navigation}/>
        <Map userCenterSearch={centerLocation}></Map>
        </>
    );
}

export default MapPage;