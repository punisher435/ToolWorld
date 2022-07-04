import axios from 'axios';

import ApiLinks from '../config/Api';

export const profile_update = async ({token,data}) => {
    const config = {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'multipart/form-data ',
            'Accept': 'application/json',
        },
       
    };

       return  await axios.post(`${ApiLinks.profileUpdate}`,data, config)
 
};

export const sendotp = async (data) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
       
    };

       return  await axios.post(`${ApiLinks.sendotp}`,data, config)
 
};

export const resendotp = async (data) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
       
    };

       return  await axios.post(`${ApiLinks.resendotp}`,data, config)
 
};

export const verifyotp = async (data) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
       
    };

       return  await axios.post(`${ApiLinks.verifyotp}`,data, config)
 
};


export const sendforgetpassword = async (data) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
       
    };

       return  await axios.post(`${ApiLinks.forgetpassword}`,data, config)
 
};
