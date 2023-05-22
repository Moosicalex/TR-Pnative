import axios from "axios"
import { useState } from "react";

export const MapService = (api, service, format, query, location) => {
    const places = []

    const URL = "https://maps.googleapis.com"
    const urlString = `${URL}/maps/api/${api}/${service}/${format}?location=${location.lat}%2C${location.lng}&query=${query}&key=AIzaSyB_QiJB3yRJv4jST1JV56pmWh3n7diSnNQ`
    console.log(urlString)
    axios.get(urlString)
    .then((res) => {
        for (let x = 0; x < res.data.results.length; x++) {
            places.push(res.data.results[x])
        }
    })
    .catch((err) => console.log(err));
    return places

};

