import React, { useEffect, useState } from "react";
import {View, Image, SafeAreaView, StyleSheet, Text} from 'react-native';
import {useQuery} from '@apollo/client';
import {GET_SAVED_ACTIVITY} from 'trip/Graphiql/queries.js'

function SavedActivities(props) {

    const user_id = props.id;
    const [drop_value, setDrop_value] = useState([]);
    const [selected, setSelected] = useState("");
    
    console.log(user_id)
    
    const {loading: activity_loading, error: activity_error, data: activity_data } = useQuery(GET_SAVED_ACTIVITY)

    
    render(
        activity_data ? 
            
        :   
        <Text>Not here yet</Text>
    )



}

export default SavedActivities;
