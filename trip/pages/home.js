import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import Topbar from 'trip/Components/topbar.js';
import SearchContainer from '../Components/searchBar/searchContainer';

function Home({navigation}) {

    return (
        <>
        <Topbar navigation={navigation}/>
        <SearchContainer/>
        </>
    );
}

export default Home;