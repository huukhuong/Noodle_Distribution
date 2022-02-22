import { View, Text, Image } from 'react-native'
import React from 'react'

const LogoAlta = ({ width, height }) => {
    return (
        <Image
            source={require('../assets/logo.png')}
            style={{
                width: width,
                height: height,
                resizeMode: 'center'
            }} />
    )
}

export default LogoAlta;