import React, { useState } from 'react'
import MapView, {Marker} from 'react-native-maps'
import { StyleSheet, SafeAreaView, View, Text } from 'react-native'

const Map = ({userCenterSearch}) => {

    const [lat, setLat] = useState(null)
    const [lng, setLng] = useState(null)
    const [onLoad, setOnLoad] = useState(false)
    const [onMount, setOnMount] = useState(false)
    const [ID, setID] = useState(0)
    
    const getRnd = (min, max) => {
        return Math.floor(Math.random() * (max - min) ) + min
    }

    const readyMap = () => {
        console.log(userCenterSearch.geometry.location.lat)
        setLat(userCenterSearch.geometry.location.lat)
        setLng(userCenterSearch.geometry.location.lng)
        incrID()
        setOnMount(true)
    }

    const incrID = () => {
        setID(ID + 1)
        return ID - 1
    }



    return (
        
        <SafeAreaView>
            {!onMount ? (readyMap(), <Text>Loading....</Text>) : null}
            <View>
                {onMount && <MapView
                    style={styles.mapStyle}
                    initialRegion={{
                        latitude: lat,
                        longitude: lng,
                        latitudeDelta: 13,
                        longitudeDelta: 13,
                    }}
                    onMapReady={() => setOnLoad(true)}
                >
                    {onLoad && <Marker
                key={0}
                coordinate={{latitude:lat, longitude:lng}}
                />}
                    </MapView>}
                
                
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