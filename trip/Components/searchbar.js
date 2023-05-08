import React, { useState } from 'react'
import { Text, TextInput, StyleSheet, View, Keyboard } from 'react-native'
import { Icon, SearchBar } from 'react-native-elements'

const MapSearchBar = () => {
    const [content, setContent] = useState("")
    const searchContent = [
        "blue",
        "red",
        "green",
        "yellow"
    ]

    return (
        <>
            <View style={styles.searchBox}>
                <SearchBar
                    lightTheme
                    round
                    containerStyle={styles.searchContainer}
                    inputContainerStyle={styles.searchText}
                    onChangeText={setContent}
                    value={content}
                    placeholder={"enter the text"}
                    onSubmitEditing={Keyboard.dismiss}
                />
                <View>
                    {searchContent.map((match) => {
                        if (content && match.includes(content.toLowerCase())) {
                            return (
                                <View key={match.key} style={styles.searchResults}>
                                    <Text key={match.key}>
                                        {match}
                                    </Text>
                                </View>
                            )
                        }
                    })}
                </View>
            </View>
        </>

    )
}

const styles = StyleSheet.create({
    searchBox: {
        position: 'absolute',
        zIndex: 1
    },
    searchContainer: {
        marginTop: 100,
        paddingBottom: 40,
        height: 30,
        width: 200,
        backgroundColor: '#fff',
    },
    searchIcon: {
        paddingLeft: 10,
        paddingTop: 1
    },
    searchText: {
        width: 180,
        height: 30
    },
    searchResults: {
        width: 160,
        height: 30,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderStyle: 'solid',
        borderColor: '#B0B0B0',
        borderBottomWidth: 1
    },


});

export default MapSearchBar