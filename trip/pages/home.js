import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import Topbar from 'trip/Components/topbar.js';

function Home({navigation}) {

    return (
        <>
        <Topbar navigation={navigation}/>
        </>
    );
}

export default Home;