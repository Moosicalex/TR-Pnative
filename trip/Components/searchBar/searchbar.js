import React, { useState } from 'react'
import { Text, TextInput, StyleSheet, View, Keyboard } from 'react-native'
import { Icon, SearchBar, Input } from 'react-native-elements'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const MapSearchBar = ({ searchPhrase, setSearchPhrase }) => {

    // uses native element searchbar component with overwritten style changes
    // onSubmitEditing dismissed keyboard when user hits enter

    const [error, setError] = useState(null)
    const [location, setLocation] = useState(null)

    const searchBar = <SearchBar
        lightTheme
        round
        containerStyle={styles.searchContainer}
        inputContainerStyle={styles.searchText}
        onChangeText={setSearchPhrase}
        value={searchPhrase}
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
                    console.log(details), setSearchPhrase(data.description), setLocation(details.geometry.location)
                }}
                onFail={(error) => setError(error)}
                textInputProps={{
                    onChangeText: setSearchPhrase,
                    value: searchPhrase
                }}
            />
            {searchPhrase && <Text>{searchPhrase}</Text>}
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