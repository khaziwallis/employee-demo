import axios from 'axios';
import { API_URL } from '../constants/constant';

export const getEmployees = async () => {
    let headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    };
    const res = await axios.get(API_URL + `/listEmployees`, { headers: headers });
    return await res;
};

export const createEmployee = async (data: any) => {
    let headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    };
    const res = await axios.post(API_URL + `/createEmployee`, data, { headers: headers });
    return await res;
};
