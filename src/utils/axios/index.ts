import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://8080-sirhillsdev-wifarmapi-puui6qh303s.ws-eu104.gitpod.io',
    headers: {
        'Content-Type' : 'application/json'
    }
})

export default axiosInstance;