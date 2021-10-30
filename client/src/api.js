import axios from 'axios'

const request = axios.create({
    timeout: 5000,
    baseURL: "http://localhost:5000/api/"
})

export const login = async (params) => {
    return await request.post(params[0],params[1]);
}