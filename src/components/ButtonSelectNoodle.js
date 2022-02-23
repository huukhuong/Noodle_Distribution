import { Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Constants } from '../ultils'

const ButtonSelectNoodle = ({ onPress, isPicked, unavailable }) => {

    const imageFile = !unavailable ?
        isPicked ?
            Constants.NOODLE_CUP_PICKED_IMG :
            Constants.NOODLE_CUP_NO_PICK_IMG :
        Constants.NOODLE_CUP_UNAVAILABLE_IMG;

    return (
        <TouchableOpacity
            activeOpacity={1}
            onPress={() => onPress()}>
            <Image
                source={imageFile}
                style={styles.cupNoodle} />
        </TouchableOpacity>
    )
}

export default ButtonSelectNoodle

const styles = StyleSheet.create({
    cupNoodle: {
        width: 110,
        height: 131
    }
})