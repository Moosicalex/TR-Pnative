import React, { useState } from 'react'
import { Text, TextInput, StyleSheet, View, Keyboard } from 'react-native'
import { Icon, SearchBar } from 'react-native-elements'

const MapSearchBar = ({searchPhrase, setSearchPhrase}) => {

    // uses native element searchbar component with overwritten style changes
    // onSubmitEditing dismissed keyboard when user hits enter

    return (
        <>

                <SearchBar
                    lightTheme
                    round
                    containerStyle={styles.searchContainer}
                    inputContainerStyle={styles.searchText}
                    onChangeText={setSearchPhrase}
                    value={searchPhrase}
                    placeholder={"enter the text"}
                    onSubmitEditing={Keyboard.dismiss}
                />
        </>

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
});

export default MapSearchBar