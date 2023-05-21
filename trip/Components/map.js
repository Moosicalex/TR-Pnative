import React, { useRef, useState, useEffect } from 'react'
import MapView, {Marker} from 'react-native-maps'
import { StyleSheet, SafeAreaView, View, Text, Dimensions } from 'react-native'
import RNGooglePlaces from 'react-native-google-places';
import { MapService } from './mapService';

const Map = ({userCenterSearch}) => {

    const {height, width} = Dimensions.get('window')

    const [lat, setLat] = useState(null)
    const [lng, setLng] = useState(null)
    const [onLoad, setOnLoad] = useState(false)
    const [onMount, setOnMount] = useState(false)
    const [ID, setID] = useState(0)
    const LATITUDE_DELTA = 0.28;
    const LONGITUDE_DELTA = LATITUDE_DELTA * (width / height);
    const [markerList, setMarkerList] = useState()

    const mapRef = React.useRef()
    
    const getRnd = (min, max) => {
        return Math.floor(Math.random() * (max - min) ) + min
    }

    useEffect(() => {
        setMarkerList(MapService("place", "textsearch", "json", "food", userCenterSearch.geometry.location))
      }, []);

    const readyMap = () => {
        setLat(userCenterSearch.geometry.location.lat)
        setLng(userCenterSearch.geometry.location.lng)
        incrID()
        setMarkers()
        setOnMount(true)
    }

    

    const setMarkers = () => {

    }

    const incrID = () => {
        setID(ID + 1)
        return ID - 1
    }

    const initialRegion = {
        latitude: lat,
        longitude: lng,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
    }



    return (
        
        <SafeAreaView>
            {!onMount ? (readyMap(), <Text>Loading....</Text>) : null}
            <View>
                {onMount && <MapView
                    ref={mapRef}
                    style={styles.mapStyle}
                    initialRegion={{
                        latitude: lat+.1,
                        longitude: lng+.1,
                        latitudeDelta: LATITUDE_DELTA,
                        longitudeDelta: LONGITUDE_DELTA,
                    }}
                    onMapReady={() => setOnLoad(true)}
                >
                    {onLoad && <Marker
                key={0}
                coordinate={{latitude:lat, longitude:lng}}
                title={userCenterSearch.formulated_address}
                />
                }
                {markerList && (
                    console.log("location 1 ----------"),
                    markerList.map((marker) => 
                    <Marker
                    coordinate={{latitude:marker.geometry.location.lat, longitude:marker.geometry.location.lng}}
                    title={marker.name}
                    />
                    )
                )}
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