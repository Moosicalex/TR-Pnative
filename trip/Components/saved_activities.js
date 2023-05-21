import React, { useEffect, useState } from "react";
import {View, Image, SafeAreaView, StyleSheet, Text, Button} from 'react-native';
import {useQuery} from '@apollo/client';
import {GET_SAVED_ACTIVITY} from 'trip/Graphiql/queries.js'
import DropDownPicker from 'react-native-dropdown-picker';

const SavedActivities = (props) => {

    const navigate = props.navigate;

    const user_id = props.id;
    const [drop_value, setDrop_value] = useState(null);
    const [selected, setSelected] = useState("");
    const [bool, setBool] = useState(false);
    const [open, setOpen] = useState(false);
    const [items, setItems] = useState([{label: 'something', value: 'something'}, {label: 'something else', value: 'something else'}]);
    const [details, setDetails] = useState({name: "details", geometry: {location: {lat: null, lng: null}}}); 
    
    //call to the database for a list of saved activities tied to a given user id
    const {loading: activity_loading, error: activity_error, data: activity_data } = useQuery(GET_SAVED_ACTIVITY, {
        variables: {user_id: user_id}
    })

    //Changes the items array to instead include items from the retrieved data
    const updateItems = () => {
        console.log("updating items")
        setItems([])
        activity_data.saved_activity.map(item => (
            setItems(prevItems => [...prevItems, {label: item.name, value: item.name + "|" + item.lat + "|" + item.lng}])
        ))
    }

    //as soon as data is retrieved from the database query update the items array
    useEffect(() => {
      if(activity_data){updateItems()}
    }, [activity_data])

    //button that navigates to the map page --TODO-- this should also pass information about the selected saved activity
    const buttonPress = () => {
        console.log("button was pressed")
        details.geometry.location.lat = parseFloat(drop_value.split("|")[1])
        details.geometry.location.lng = parseFloat(drop_value.split("|")[2])
        navigation.navigate('Map', {details:details})
    }
    
    return(
        activity_data ? 
            <>
                <Text>Saved Activities</Text>
                <DropDownPicker
                    open={open}
                    value={drop_value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setDrop_value}
                    setItems={setItems}
                />
                <Button title="use activity" onPress={buttonPress}></Button>{/*we can worry about formatting later*/}
            </>
        :   
        <Text>Not here yet</Text>
    )



}

export default SavedActivities;
