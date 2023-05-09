import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    Text,
    SafeAreaView,
    ActivityIndicator,
} from "react-native";
import ListResults from "./listResults";
import MapSearchBar from "./searchbar";

const SearchContainer = () => {
    const [searchPhrase, setSearchPhrase] = useState("");
    const fakeData =
        [
            { name: "blue" },
            { name: "red" },
            { name: "green" },
            { name: "yellow" }
        ]

    return (
        <SafeAreaView style={styles.root}>
            <MapSearchBar
                searchPhrase={searchPhrase}
                setSearchPhrase={setSearchPhrase}
            />
            <ListResults
                searchPhrase={searchPhrase}
                fakeData={fakeData}
            />
        </SafeAreaView>
    )



}

export default SearchContainer

const styles = StyleSheet.create({
    root: {
        display: 'flex',
        flexDirection: 'column',
        flexShrink: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});