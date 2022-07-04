import axios from 'axios';

import ApiLinks from '../config/Api';


export const courses = async ({token,page,name}) => {
    const config = {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        params:{
            page:page,
            name:name,
        }
    };


   
       return  await axios.post(`${ApiLinks.courses}`,config, config)
 
};

export const get_course = async ({token,id}) => {
    const config = {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
       
    };


   
       return  await axios.get(`${ApiLinks.get_course}${id}/`,config)
 
};