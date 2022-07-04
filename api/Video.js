import axios from 'axios';

import ApiLinks from '../config/Api';


export const update_min = async ({token,id,min}) => {
    const config = {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
       
    };
    const body = JSON.stringify({
        video_id:id,
    total_min_completed:min


      });

   
       return  await axios.post(`${ApiLinks.updateMin}`,body, config)
 
};



export const update_fav = async ({token,id}) => {
    const config = {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
       
    };
    const body = JSON.stringify({
        video_id:id,


      });

   
       return  await axios.post(`${ApiLinks.updateFav}${id}`,body, config)
 
};


export const get_all_fav = async ({token,page}) => {
    const config = {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        params:{
            page:page,
        }
    };


   
       return  await axios.get(`${ApiLinks.fav}`,config)
 
};
