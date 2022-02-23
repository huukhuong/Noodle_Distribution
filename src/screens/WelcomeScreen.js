import {
    StyleSheet,
    StatusBar,
    View,
    Image,
} from 'react-native'
import React from 'react'
import { Colors, Constants, Styles } from '../ultils'
import { Background, FotterGroup, HeaderGroup } from '../components';

const WelcomeScreen = () => {
    return (
        <View style={Styles.container}>
            <StatusBar backgroundColor={Colors.BLACK} />
            <Background />
            <HeaderGroup
                title={Constants.WELCOME_IMG} />

            <View style={[Styles.alignItemsCenter, { flex: 1, marginTop: -35 }]}>
                <Image
                    source={Constants.ALTA_VIDEO}
                    style={styles.altaVideo} />
            </View>

            <FotterGroup />
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
})