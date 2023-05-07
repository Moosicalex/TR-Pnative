import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';

function Topbar() {

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '10%'
    //resizeMode: 'center',
  },
  bar_logo: {
      height: 100,
      width: 200,
      resizeMode: 'cover',
  }
});
    return (
        <>
        <View style={styles.container}>
              <Image
                style={styles.bar_logo}
                source={require('trip/assets/greenLogo.png')}
              />
        </View>
        </>
    );
}

export default Topbar;