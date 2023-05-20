import React, { useEffect, useState } from "react";
import {View, Image, SafeAreaView, StyleSheet, Text} from 'react-native';
import {useQuery} from '@apollo/client';
import {GET_SAVED_ACTIVITY} from 'trip/Graphiql/queries.js'

function SavedActivities(props) {

    const user_id = props.id;
    const [drop_value, setDrop_value] = useState([]);
    const [selected, setSelected] = useState("");
    const [bool, setBool] = useState(false);
    
    console.log(user_id)
    
    const {loading: activity_loading, error: activity_error, data: activity_data } = useQuery(GET_SAVED_ACTIVITY, {
        variables: {user_id: user_id},
        onCompleted: updateBool
    })

    const updateBool = () => {
        setBool(true)
    }

    useEffect(() => {
      if(bool){console.log(activity_data)}
    }, [bool])
    
    
    return(
        activity_data ? 
            activity_data.saved_activity.map(activity => (
                <Text>{activity.name}</Text>   
            ))
        :   
        <Text>Not here yet</Text>
    )



}

export default SavedActivities;
