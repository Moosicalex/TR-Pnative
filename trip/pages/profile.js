import React from 'react';
import {View, Image, SafeAreaView, StyleSheet, Text} from 'react-native';
import Topbar from 'trip/Components/topbar.js';
import {useQuery} from '@apollo/client';
import {GET_TRIP_USER_BY_EMAIL} from 'trip/Graphiql/queries.js'

function Profile(props) {

    //const {data: user_data, loading: user_loading, error: user_error} = useQuery(GET_TRIP_USER_BY_EMAIL, {
     //   variables: {email: props.email},
     //   onCompleted: update_found
    //})

    function update_found() {
    console.log(user_data)
    }
    

    const styles = StyleSheet.create({
        loading_icon: {


        },
        loading_container: {
            backgroundColor: 'green',
            height: '100%',
            flexDirection: 'column',
            justifyContent: 'center',
        }
    })

    return (
        true ? 
        <>
            <SafeAreaView style={styles.loading_container} >
                <Text>Loading</Text>
                <Image source={require('trip/assets/loading.gif')} />
            </SafeAreaView>
        </>
        :
        <>
        <Topbar navigation={navigation}/>
        <Text>{props.username}</Text>
        </>
    );
}

export default Profile;