import axios from "axios";

const URL = 'https://my-scraping-api.herokuapp.com/'

export default function fetchData() {
    try {
        return axios.get(URL)
    } catch (error) {
        console.log(error.mesage)
    }
}

