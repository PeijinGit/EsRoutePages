import axios from 'axios'
import {baseurl} from "../Config";

export const preSubmit = (values) => {
    //debugger
    console.log(values);
    return axios.post(baseurl+`api/preSurvey`, values)
    //return axios.post(baseurl+`Survey/AcquireSurveyP1`, values)
}

export const postSubmit = (values) => {
    //debugger
    console.log(values);
    return axios.post(baseurl+`api/afterSurvey`, values)
}

export const userLogin = (values) => {
    //debugger
    console.log(values);
    return axios.post(baseurl+`/login`, values)
}