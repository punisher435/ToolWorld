import axios from 'axios';

import ApiLinks from '../config/Api';

export const get_messages = async ({token}) => {
    const config = {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json' ,
            'Accept': 'application/json',
        },
       
    };

       return  await axios.get(`${ApiLinks.getMessages}`,config)
 
};

export const send_messages = async ({token,mess}) => {
    const config = {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
       
    };

    const body = JSON.stringify({
        message:mess,


      });

       return  await axios.post(`${ApiLinks.sendMessages}`,body,config)
 
};