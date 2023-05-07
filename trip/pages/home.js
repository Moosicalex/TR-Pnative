import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import Topbar from 'trip/Components/top-bar.js';

function Home() {

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '50%'
    //resizeMode: 'center',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
  homescreen_logo: {
      height: 90,
      width: 200,
      resizeMode: 'cover',
  }
});
    return (
        <>
        <Topbar/>
        <View style={styles.container}>
              <Image
                style={styles.homescreen_logo}
                source={require('trip/assets/greenLogo.png')}
              />
          </View>
        <Text>hello sir</Text>
        </>
    );
}

export default Home;