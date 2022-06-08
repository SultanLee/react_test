import axios from "axios";
import {LOGIN_USER, REGISTER_USER} from '../type'

//login
export function loginUser(dataToSubmit) {
    const request = axios.post('/api/users/login', dataToSubmit)
        .then(res => res.data)

    return{
        type: "LOGIN_USER",
        payload: request
    }
}

//register
export function registerUser(dataToSubmit) {
    const request = axios.post('/api/users/register', dataToSubmit)
        .then(res => res.data)

    return{
        type: "REGISTER_USER",
        payload: request
    }
}