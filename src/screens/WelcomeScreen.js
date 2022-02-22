import {
    ImageBackground,
    StyleSheet,
    StatusBar,
    View,
    Image,
    Text
} from 'react-native'
import React from 'react'
import { Colors, Constants, FontSizes, Styles } from '../ultils'
import { Background, HeaderGroup } from '../components';

const WelcomeScreen = () => {
    return (
        <View style={Styles.container}>
            <StatusBar hidden />
            <Background />
            <HeaderGroup />

            <View style={[Styles.alignItemsCenter, { flex: 1 }]}>
                <Image
                    source={Constants.ALTA_VIDEO}
                    style={styles.altaVideo} />
            </View>

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
        </View>
    )
}

export default WelcomeScreen;

const styles = StyleSheet.create({
    altaVideo: {
        width: 305,
        height: 170,
        resizeMode: 'stretch'
    },
    containerBottom: {
        flex: 1,
        paddingHorizontal: 32,
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