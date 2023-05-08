import React, { useState } from 'react'
import { TextInput, StyleSheet } from 'react-native'

const SearchBar = () => {
    const [content, setContent] = useState("enter text")

    return (
        <TextInput
            editable
            style={styles.input}
            onChangeText={setContent}
            value={content}
        />
    )
}

const styles = StyleSheet.create({
    input: {
        borderRadius: 30,
        height: 40,
        width: 300,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});

export default SearchBar