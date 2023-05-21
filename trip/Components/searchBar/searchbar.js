import React, { useState } from 'react'
import { Text, TextInput, StyleSheet, View, Keyboard } from 'react-native'
import { Icon, SearchBar, Input } from 'react-native-elements'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useNavigation } from '@react-navigation/native';

const MapSearchBar = (props) => {

    // uses native element searchbar component with overwritten style changes
    // onSubmitEditing dismissed keyboard when user hits enter

    const [error, setError] = useState(null)
    const [location, setLocation] = useState(null)

    const navigation = useNavigation();

    const searchBar = <SearchBar
        lightTheme
        round
        containerStyle={styles.searchContainer}
        inputContainerStyle={styles.searchText}
        onChangeText={props.setSearchPhrase}
        value={props.searchPhrase}
        placeholder={"enter the text"}
        onSubmitEditing={Keyboard.dismiss}
    />

    return (
        <View style={styles.container}>
            <GooglePlacesAutocomplete
                fetchDetails
                query={{
                    key: 'AIzaSyB_QiJB3yRJv4jST1JV56pmWh3n7diSnNQ',
                    language: 'en'
                }}
                placeholder='Enter location to search'
                onPress={(data, details) => {
                    props.setSearchPhrase(data.description), setLocation(details.geometry.location),
                    navigation.navigate('Map', {details:details})
                }}
                onFail={(error) => setError(error)}
                textInputProps={{
                    onChangeText: props.setSearchPhrase,
                    value: props.searchPhrase
                }}
            />
            {props.searchPhrase && <Text>{props.searchPhrase}</Text>}
            {location && <Text>lat: {location.lat}, lng: {location.lng}</Text>}

        </View>
    )
}

const styles = StyleSheet.create({
    searchContainer: {
        marginTop: 12,
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        width: "90%",
    },
    searchText: {
        fontSize: 20,
        marginLeft: 10,
        width: "90%",
    },
    container: {
        height: '80%'
    },
});

export default MapSearchBar