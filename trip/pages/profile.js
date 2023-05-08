import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import Topbar from 'trip/Components/topbar.js';

function Profile(props) {

    return (
        <>
        <Topbar/>
        <Text>{props.username}</Text>
        </>
    );
}

export default Profile;