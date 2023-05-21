import axios from "axios"

export const MapService = (api, service, format, query, location) => {
    const URL = "https://maps.googleapis.com"
    const urlString = `${URL}/maps/api/${api}/${service}/${format}?location=${location.lat}%2C${location.lng}&query=${query}&key=AIzaSyB_QiJB3yRJv4jST1JV56pmWh3n7diSnNQ`
    console.log(urlString)
    axios.get(urlString)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

