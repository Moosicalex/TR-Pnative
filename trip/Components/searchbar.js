import React, { useState } from 'react'
import { Text, TextInput, StyleSheet, View, Keyboard } from 'react-native'
import { Icon } from 'react-native-elements'

const SearchBar = () => {
    const [content, setContent] = useState("enter the text")
    const searchContent = [
        "blue",
        "red",
        "green",
        "yellow"
    ]

    return (
        <>
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
        <View>
        {searchContent.map((match) => {
                if (content && match.includes(content.toLowerCase())) { 
                return (
                    <View key={match.id} style={styles.searchResults}>
                        <Text>
                            {match}
                        </Text>
                    </View>
                )
                }      
            })}
        </View>
        </>
        
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

export default SearchBar