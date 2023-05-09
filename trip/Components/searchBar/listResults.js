import React from "react";
import { FlatList, StyleSheet, Text, View, SafeAreaView } from "react-native"


const ListResults = ({ searchPhrase, fakeData }) => {

    const Result = ({ name }) => (
        <View>
            <Text style={styles.title}>{name}</Text>
        </View>
    )


    // takes an item parameter (similar to map() operation) that returns conditional components in a list structure
    const renderItem = ({ item }) => {
        if (searchPhrase === "") {
            return <Result name={item.name} />;
        }
        if (searchPhrase.length >= 2 && item.name.toLowerCase().includes(searchPhrase.toLowerCase())) {
            return <Result name={item.name} />
        }
    }

    // data is the total dataset, renderItem is a function that returns conditional data, key extractor gets id for each unique child
    return (
        <SafeAreaView style={styles.listContainer}>
            <FlatList
                data={fakeData}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </SafeAreaView>
    )
}

export default ListResults

const styles = StyleSheet.create({
    listContainer: {
        margin: 10,
        height: "85%",
        width: "100%",
        justifyContent: "center",
        alignItems: "flex-start",
    },
    item: {
        margin: 30,
        borderBottomWidth: 2,
        borderBottomColor: "lightgrey"
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 5,
        fontStyle: "italic",
    },
});