import React, { useState } from 'react'
import { TextInput, StyleSheet, View, Keyboard } from 'react-native'
import { Icon } from 'react-native-elements'

const SearchBar = () => {
    const [content, setContent] = useState("enter text")

    return (
        <View
            style={styles.searchContainer}>
            <Icon name='search' style={styles.searchIcon} />
            <TextInput
                editable
                style={styles.searchText}
                onChangeText={setContent}
                value={content}
                onSubmitEditing={Keyboard.dismiss}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    searchContainer: {
        width: 200,
        height: 30,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderStyle: 'solid',
        borderRadius: 30,
        borderWidth: 1
    },
    searchIcon: {
        paddingLeft: 10,
        paddingTop: 1
    },
    searchText: {
        paddingTop: 4,
        flex: 1,
        width: 100,
        height: 20
    },


});

export default SearchBar