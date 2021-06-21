import axios from 'axios'
import {baseurl} from "../Config";

export const preSubmit = (values, controllerName) => {
    return axios.post(baseurl+`User/${controllerName}`, values)
}