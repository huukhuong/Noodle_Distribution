import {
    StyleSheet,
    StatusBar,
    View,
    Image,
    Text,
    TouchableOpacity,
} from 'react-native'
import React, { useState } from 'react'
import { Colors, Constants, Styles } from '../ultils'
import { Background, ButtonSelectNoodle, HeaderGroup, InfomationBox } from '../components';

const InfomationScreen = () => {

    const [cup1, setCup1] = useState(false);
    const [cup2, setCup2] = useState(false);
    const [cup3, setCup3] = useState(false);

    return (
        <View style={Styles.container}>
            <StatusBar backgroundColor={Colors.BLACK} />
            <Background />
            <HeaderGroup
                title={Constants.INFOMATION_IMG}
                titleWidth={260} />

            <View style={{ flex: 1, paddingHorizontal: 24 }}>
                <InfomationBox
                    avatar={{ uri: 'https://bitly.com.vn/b41kba' }}
                    fullName={'Angelina'}
                    birthday={'28/12/1996'}
                    gender={'Female'}
                    department={'Singer'} />

                <View style={[
                    Styles.row,
                    Styles.alignItemsCenter,
                    Styles.justifyContentBetween,
                    { marginTop: 15 }
                ]}>
                    <ButtonSelectNoodle
                        onPress={() => setCup1(!cup1)}
                        isPicked={cup1} />
                    <ButtonSelectNoodle
                        onPress={() => setCup2(!cup2)}
                        isPicked={cup2} />
                    <ButtonSelectNoodle
                        onPress={() => setCup3(!cup3)}
                        isPicked={cup3} />
                </View>
                <Image
                    source={Constants.THREE_CUP_OF_NOODLES_LEFT_THIS_MONTH}
                    style={{
                        marginTop: 5,
                        alignSelf: 'center',
                        resizeMode: 'center'
                    }} />
                <TouchableOpacity
                    activeOpacity={.8}>
                    <Image
                        source={Constants.BTN_GET_NOODLES}
                        style={{
                            alignSelf: 'center',
                            resizeMode: 'center'
                        }} />
                </TouchableOpacity>
            </View>

            <View style={{ flex: 1.5 }}></View>
        </View>
    )
}

export default InfomationScreen;

const styles = StyleSheet.create({
})