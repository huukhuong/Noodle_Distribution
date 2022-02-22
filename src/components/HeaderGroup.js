import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import { Constants } from '../ultils';

const HeaderGroup = ({ title, titleWidth }) => {
    return (
        <View style={styles.headerGroup}>
            <Image
                source={Constants.LOGO_IMG}
                style={styles.logo} />
            <Image
                style={[styles.title, { width: titleWidth ? titleWidth : 140 }]}
                source={title} />
        </View>
    )
}

export default HeaderGroup;

const styles = StyleSheet.create({
    headerGroup: {
        flex: 1,
        alignItems: 'center',
        marginTop: 65
    },
    logo: {
        width: 85,
        height: 69,
        resizeMode: 'stretch',
        marginBottom: 45,
        marginTop: 30
    },
    title: {
        width: 140,
        height: 35,
        resizeMode: 'stretch'
    }
})