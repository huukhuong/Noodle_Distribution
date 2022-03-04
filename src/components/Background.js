import { Dimensions, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import { Constants } from '../ultils'

const Background = () => {
    return (
        <ImageBackground
            source={Constants.BACKGROUND_IMG}
            style={styles.background} />
    )
}

export default Background

const styles = StyleSheet.create({
    background: {
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        width: Dimensions.get('window').width,
        minHeight: Dimensions.get('window').height,
    }
})