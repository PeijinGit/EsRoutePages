import axios from 'axios'
import {baseurl} from "../Config";

export const preSubmit = (user, controllerName) => {
    return axios.post(baseurl+`User/${controllerName}`, user)
}