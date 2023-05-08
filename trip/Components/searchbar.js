import React, { useState } from 'react'
import { TextInput, StyleSheet} from 'react-native'

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
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });

export default SearchBar