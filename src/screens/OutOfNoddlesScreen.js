import {
    StyleSheet,
    StatusBar,
    View,
    Image,
    Text,
} from 'react-native'
import React from 'react'
import { Colors, Constants, Styles } from '../ultils'
import { Background, HeaderGroup } from '../components';

const OutOfNoddlesScreen = () => {
    return (
        <View style={Styles.container}>
            <StatusBar backgroundColor={Colors.BLACK} />
            <Background />
            <HeaderGroup
                title={Constants.OUT_OF_NOODLES_IMG}
                titleWidth={260} />

            <View style={[Styles.alignItemsCenter, { flex: 1 }]}>
                <Text style={[
                    Styles.textWhite,
                    styles.alert
                ]}>
                    There is
                    <Text style={{
                        color: '#ff3334',
                        fontSize: 20,
                        fontWeight: '900'
                    }}>
                        {' 0 '}
                    </Text>
                    cup of noodles left in the machine. Please fill in to continue.
                </Text>
            </View>

            <View style={styles.cups}>
                <Image style={styles.noodleCup} source={Constants.OUT_NOODLES_CUP} />
                <Image style={styles.noodleCupLarge} source={Constants.OUT_NOODLES_CUP} />
                <Image style={styles.noodleCup} source={Constants.OUT_NOODLES_CUP} />
            </View>

            <View style={{ flex: 1 }}></View>
        </View>
    )
}

export default OutOfNoddlesScreen;

const styles = StyleSheet.create({
    alert: {
        marginBottom: 10,
        width: 260,
        fontSize: 16,
        marginTop: -25
    },
    cups: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        position: 'absolute',
        top: 370,
        left: 0,
        right: 0,
    },
    noodleCup: {
        width: 156 / 2,
        height: 271 / 2,
        resizeMode: 'stretch',
        marginBottom: 30,
        marginHorizontal: 8
    },
    noodleCupLarge: {
        width: 110,
        height: 200,
        resizeMode: 'stretch'
    }
})