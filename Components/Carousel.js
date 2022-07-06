import React, { useState, useEffect } from 'react'
import { View,  StyleSheet, Dimensions, FlatList, Animated } from 'react-native'
import { Constants } from '../config/constants'
import CarouselItem from './CarouselItem'


const { width, heigth } = Dimensions.get('window')


function infiniteScroll(dataList) {
    const numberOfData = dataList.length
    let scrollValue = 0, scrolled = 0

    setInterval(function () {
        scrolled++
        if (scrolled < numberOfData)
            scrollValue = scrollValue + width

        else {
            scrollValue = 0
            scrolled = 0
        }

       

    }, 3000)
}


const Carousel = ({ data }) => {
    const scrollX = new Animated.Value(0)
    
    let position = Animated.divide(scrollX, width)
    const [dataList, setDataList] = useState(data)
    const [flatList, setflatList] = useState()

    useEffect(() => {
        setDataList(data)
        infiniteScroll(dataList)
    })


    if ( data && data.length) {
        return (
            <View style={styles.main}>
                <View style={styles.container}>
                    <FlatList data={data}
                        ref={(flatList) => { setflatList(flatList); }}
                        keyExtractor={(item, index) => 'key' + index}
                        horizontal
                        pagingEnabled
                        scrollEnabled
                        snapToAlignment="center"
                        scrollEventThrottle={16}
                        decelerationRate={"fast"}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => {
                            return <CarouselItem item={item} />
                        }}
                        onScroll={Animated.event(
                            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                            { useNativeDriver: false }
                        )}
                    />

                    <View style={styles.dotView}>
                        {data.map((_, i) => {
                            let opacity = position.interpolate({
                                inputRange: [i - 1, i, i + 1],
                                outputRange: [0.1, 1, 0.1],
                                extrapolate: 'clamp'
                            })
                            return (
                                <Animated.View
                                    key={i}
                                    style={{ opacity, height: 7, width: 7, backgroundColor: '#595959', margin: 3, borderRadius: 2 }}
                                />
                            )
                        })}

                    </View>
                </View>
            </View>
        )
    }

    console.log('Please provide Images')
    return null
}

const styles = StyleSheet.create({
    dotView: { flexDirection: 'row', justifyContent: 'center',position:'absolute',bottom:90*Constants.r,left:32*Constants.r, },
    container: {
        flex: 1,



    },
    main: {
        flex: 1,
        marginTop: 20,
    },
})

export default Carousel