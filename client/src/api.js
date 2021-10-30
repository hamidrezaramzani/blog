import axios from 'axios'

const request = axios.create({
    timeout: 5000,
    baseURL: "http://localhost:5000/api/"
})
export const login = async (url, data) => {
    return await request.post(url, data);
}