import axios from 'axios'
import {baseurl} from "../Config";

export const preSubmit = (values) => {
    //debugger
    return axios.post(baseurl+`Survey/AcquireSurveyP1`, values)
}

export const postSubmit = (values) => {
    //debugger
    return axios.post(baseurl+`Survey/AcquireSurveyP2`, values)
}