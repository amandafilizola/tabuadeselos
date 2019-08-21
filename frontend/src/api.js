import axios from 'axios';
const url = 'https://tabua-backend.herokuapp.com';

const api = axios.create({
    baseURL: url
})
export default api