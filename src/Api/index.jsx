import axios from 'axios'
import {baseurl} from "../Config";

export const preSubmit = (values) => {
    debugger
    console.log(baseurl+`Survey/AcquireSurveyP1`);
    return axios.post(baseurl+`Survey/AcquireSurveyP1`, values)
}