import React from 'react'
import MapView from 'react-native-maps'
import { StyleSheet, SafeAreaView, View } from 'react-native'

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
        width: "100%",
        height: "100%",
    },
})