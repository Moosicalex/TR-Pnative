import React, { useState } from "react";
import {StyleSheet,SafeAreaView,} from "react-native";
import ListResults from "./listResults";
import MapSearchBar from "./searchbar";

// Container component that hosts the individual searchBar and result list

const SearchContainer = () => {
    const [searchPhrase, setSearchPhrase] = useState("");

    return (
        <SafeAreaView style={styles.root}>
            <MapSearchBar
                searchPhrase={searchPhrase}
                setSearchPhrase={setSearchPhrase}
            />
        </SafeAreaView>
    )



}

export default SearchContainer

const styles = StyleSheet.create({
    root: {
    },
});