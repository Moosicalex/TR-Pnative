import React, { useRef, useState } from 'react'
import MapView, {Marker} from 'react-native-maps'
import { StyleSheet, SafeAreaView, View, Text } from 'react-native'

const Map = ({userCenterSearch}) => {

    const [lat, setLat] = useState(null)
    const [lng, setLng] = useState(null)
    const [onLoad, setOnLoad] = useState(false)
    const [onMount, setOnMount] = useState(false)
    const [ID, setID] = useState(0)

    const mapRef = React.useRef()
    
    const getRnd = (min, max) => {
        return Math.floor(Math.random() * (max - min) ) + min
    }

    const readyMap = () => {
        console.log(userCenterSearch.geometry.location.lat)
        console.log(userCenterSearch.geometry.location.lng)
        setLat(userCenterSearch.geometry.location.lat)
        setLng(userCenterSearch.geometry.location.lng)
        incrID()
        setOnMount(true)
    }

    const incrID = () => {
        setID(ID + 1)
        return ID - 1
    }

    const initialRegion = {
        latitude: lat,
        longitude: lng,
        latitudeDelta: 13,
        longitudeDelta: 13,
    }



    return (
        
        <SafeAreaView>
            {!onMount ? (readyMap(), <Text>Loading....</Text>) : null}
            <View>
                {onMount && <MapView
                    ref={mapRef}
                    style={styles.mapStyle}
                    initialRegion={{
                        latitude: lat+1,
                        longitude: lng+1,
                        latitudeDelta: 13,
                        longitudeDelta: 13,
                    }}
                    onMapReady={() => setOnLoad(true)}
                >
                    {onLoad && <Marker
                key={0}
                coordinate={{latitude:lat, longitude:lng}}
                title={userCenterSearch.formulated_address}
                on
                />
                }
                </MapView>} 
                {onLoad && mapRef.current?.animateToRegion(initialRegion, 500)}
                    
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