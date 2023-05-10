import React from 'react'
import MapView from 'react-native-maps'
import { SafeAreaView } from 'react-native/types'
import { StyleSheet } from 'react-native/types'

const Map = () => {



    return (
        <SafeAreaView>
            <View>
                <MapView
                    style={styles.mapStyle}
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}


                />




            </View>
        </SafeAreaView>
    )

}

export default Map


const styles = StyleSheet.create({
    mapStyle: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
})