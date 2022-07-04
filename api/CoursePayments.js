import axios from 'axios';

import ApiLinks from '../config/Api';


export const pay_for_course = async ({token,id}) => {
    const config = {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        
    };

    const body = JSON.stringify({
        course_id:id,


      });


   
       return  await axios.post(`${ApiLinks.payments}`,body, config)
 
};

