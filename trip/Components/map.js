import React, { useState } from 'react'
import MapView from 'react-native-maps'
import { StyleSheet, SafeAreaView, View } from 'react-native'

const Map = () => {

    const [lat, setLat] = useState(null)
    const [lng, setLng] = useState(null)
    const [onLoad, setOnLoad] = useState(false)
    
    const getRnd = (min, max) => {
        return Math.floor(Math.random() * (max - min) ) + min
    }



    return (
        
        <SafeAreaView>
            {!onLoad ? (setLat(getRnd(-90,90)), setLng(getRnd(-120,120)), setOnLoad(true)) : null}
            <View>
                {onLoad && <MapView
                    style={styles.mapStyle}
                    initialRegion={{
                        latitude: lat,
                        longitude: lng,
                        latitudeDelta: 13,
                        longitudeDelta: 13,
                    }}
                />}
                
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