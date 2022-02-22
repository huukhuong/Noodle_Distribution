import {
    StyleSheet,
    StatusBar,
    View,
    Image,
    Text,
    TouchableOpacity
} from 'react-native'
import React from 'react'
import { Colors, Constants, Styles } from '../ultils'
import { Background, HeaderGroup, FotterGroup } from '../components';

const ErrorScreen = () => {
    return (
        <View style={Styles.container}>
            <StatusBar backgroundColor={Colors.BLACK} />
            <Background />
            <HeaderGroup
                title={Constants.ERROR_IMG} />

            <View style={[Styles.alignItemsCenter, { flex: 1, marginTop: -35 }]}>
                <Text style={[Styles.textWhite, styles.alert]}>
                    Can not recongnize your ID card.
                </Text>
                <TouchableOpacity
                    activeOpacity={.7}
                    style={styles.button}>
                    <Text style={[Styles.textWhite, Styles.textBold]}>
                        Please scan again
                    </Text>
                </TouchableOpacity>
                <Image source={Constants.ERROR_CARD} style={styles.errorCard} />
            </View>

            <FotterGroup />
        </View>
    )
}

export default ErrorScreen

const styles = StyleSheet.create({
    alert: {
        marginBottom: 10
    },
    button: {
        backgroundColor: Colors.ORANGE,
        borderRadius: 5,
        paddingHorizontal: 12,
        paddingVertical: 10
    },
    errorCard: {
        width: 110,
        height: 131,
        marginTop: 30
    },
})