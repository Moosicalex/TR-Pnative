import React, { useEffect, useState } from "react";
import {View, Image, SafeAreaView, StyleSheet, Text} from 'react-native';
import Topbar from 'trip/Components/topbar.js';
import {useQuery} from '@apollo/client';
import {GET_TRIP_USER_BY_EMAIL} from 'trip/Graphiql/queries.js'
import SavedActivities from 'trip/Components/saved_activities.js'

function Profile(props) {

    const [user, setUser] = useState(

        {
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            phone_number: "",
            user_id: "",
            user_name: "",
        }
    );

    const {data: user_data, loading: user_loading, error: user_error} = useQuery(GET_TRIP_USER_BY_EMAIL, {
        variables: {email: props.email},
        onCompleted: update_found
    })

    function update_found() {
        setUser(user_data.trip_user[0])
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
        user_loading ? 
        <>
            <SafeAreaView style={styles.loading_container} >
                <Text>Loading</Text>
                <Image source={require('trip/assets/loading.gif')} />
            </SafeAreaView>
        </>
        :
        <>
        <Topbar navigation={navigation}/>
        <Text>{user.first_name}</Text>
        {user.user_id ? <SavedActivities id={user.user_id} /> : <Text>Not here baby </Text>}
        </>
    );
}

export default Profile;