import {
    StyleSheet,
    View,
    Image,
    Text,
} from 'react-native'
import React from 'react'
import { Colors, Constants, FontSizes, Styles } from '../ultils'

const FotterGroup = () => {
    return (
        <View style={styles.containerBottom}>
            <View style={[Styles.row, Styles.alignItemsCenter, Styles.justifyContentCenter]}>
                <Image
                    source={Constants.IC_SCAN}
                    style={styles.iconScan} />
                <Text style={[FontSizes.h3, styles.bottomTitle]}>
                    Follow the arrow to scan card
                </Text>
            </View>
            <View style={[
                Styles.alignItemsCenter,
                Styles.justifyContentCenter,
                {
                    width: '100%'
                }]}>
                <Image
                    source={Constants.SCAN_AREA}
                    style={styles.scanArea} />
                <Image
                    source={Constants.DOUBLE_ARROW}
                    style={styles.doubleArrow} />
            </View>
        </View>
    )
}

export default FotterGroup;

const styles = StyleSheet.create({
    containerBottom: {
        flex: 1,
        paddingHorizontal: 32,
        marginTop: 20
    },
    iconScan: {
        width: 35,
        height: 35
    },
    bottomTitle: {
        fontWeight: 'bold',
        color: Colors.WHITE,
        marginStart: 10
    },
    scanArea: {
        width: 108,
        height: 140,
        resizeMode: 'stretch',
        marginTop: 20
    },
    doubleArrow: {
        width: 68,
        height: 40,
        position: 'absolute',
        resizeMode: 'stretch',
        right: 20
    }
})