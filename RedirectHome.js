import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { connect } from 'react-redux';

import NavigationTab from './NavigationTab';
import NavigationHome from './NavigationHome';

const { width } = Dimensions.get('window')

const RedirectHome = (props) => {
    const [width1, setwidth] = React.useState(Dimensions.get('window').width);
  const [height1, setheight] = React.useState(Dimensions.get('window').height);
  Dimensions.addEventListener('change', () => {
    setwidth(Dimensions.get('window').width);
              setheight(Dimensions.get('window').height);
});
    if (true) {
        return (
            <View style={{flex:1,}} onLayout={(e) => {
                setwidth(Dimensions.get('window').width);
                setheight(Dimensions.get('window').height);
              }}>

                <NavigationHome />
            </View>

        )
    }
    else {
        return (
            <View style={{flex:1,}} onLayout={(e) => {
                setwidth(Dimensions.get('window').width);
                setheight(Dimensions.get('window').height);
              }}>

                <NavigationTab />
            </View>



        )
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        width: width,

    }
});




const mapStateToProps = state => ({
 isAuthenticated: state.authreducers.isAuthenticated,
  })
  
export default connect(mapStateToProps)(RedirectHome);









