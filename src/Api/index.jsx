import axios from 'axios'
import { baseurl } from "../Config";

export const preSubmit = (values) => {
    //debugger
    //console.log(values);
    return axios.post(baseurl + `api/preSurvey`, values)
    //return axios.post(baseurl+`Survey/AcquireSurveyP1`, values)
}

export const postSubmit = (values) => {
    //debugger
    //console.log(values);
    return axios.post(baseurl + `api/afterSurvey`, values)
}

export const userLogin = (values) => {
    //debugger
    //console.log(values);
    return axios.get(baseurl + `/User/Login`, {
        params:
        {
            "password": values.password,
            "username": values.username
        }
    })
}

export const fileSizeAcquire = () => {
    //debugger
    return axios.get(baseurl + `/File/AcquireFileSize`)
}

export const coorDownload = () => {
    //debugger
    return axios.get(baseurl + `/File/CoordinateAcquire`)
}

export const preSurveyDownload = () => {
    //debugger
    return axios.get(baseurl + `/File/PreSurveyAcquire`)
}

export const afterSurveyDownload = () => {
    //debugger
    return axios.get(baseurl + `/File/AfterSurveyAcquire`)
}

