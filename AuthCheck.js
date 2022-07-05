
import React, {useEffect} from 'react'
import RedirectHome from './RedirectHome';
import { connect } from 'react-redux';

import {

    StyleSheet,
   Text,
    View,Dimensions,
  } from 'react-native';

import { checkAuthenticated, load_user } from './redux/actions/authactions';
import Waiting from "./Screens/Waiting"

const AuthCheck = (props) => {

  const [loading,setloading] = React.useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res=await props.checkAuthenticated();
                console.log(res);
                setloading(false);
               
            } catch (err) {
              setloading(false);
            }
        }

        fetchData();
    }, []);
    const [width1, setwidth] = React.useState(Dimensions.get('window').width);
  const [height1, setheight] = React.useState(Dimensions.get('window').height);
  Dimensions.addEventListener('change', () => {
    setwidth(Dimensions.get('window').width);
              setheight(Dimensions.get('window').height);
});

if(loading)
{
  return (
    <View style={{flex:1,}} onLayout={(e) => {
      setwidth(Dimensions.get('window').width);
      setheight(Dimensions.get('window').height);
    }}>
    <Waiting/>
    </View>
  )
}
else{
  return (
    <View style={{flex:1,}} onLayout={(e) => {
      setwidth(Dimensions.get('window').width);
      setheight(Dimensions.get('window').height);
    }}>
    <RedirectHome />
    </View>
)
}
   
}

const styles = StyleSheet.create({
   
    container:{
      flex:1,
    },
  
    
  });

export default connect(null, { checkAuthenticated, load_user })(AuthCheck);





