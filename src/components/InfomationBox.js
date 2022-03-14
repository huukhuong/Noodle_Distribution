import {
    StyleSheet,
    View,
    Image,
    Text,
} from 'react-native'
import React from 'react'
import { Colors, FontSizes, Styles } from '../ultils'

const InfomationBox = ({avatar, fullName, birthday, gender, department}) => {
    return (
        <View style={styles.infomationBox}>
            <View style={[Styles.alignItemsCenter, { marginHorizontal: 20 }]}>
                <Image
                    source={avatar}
                    style={styles.circleAvatar} />
            </View>
            <View style={[Styles.row]}>
                <View>
                    <Text style={[FontSizes.h4, Styles.textWhite, Styles.textBold, styles.infomationText]}>Full name:</Text>
                    <Text style={[FontSizes.h4, Styles.textWhite, Styles.textBold, styles.infomationText]}>Birthday:</Text>
                    <Text style={[FontSizes.h4, Styles.textWhite, Styles.textBold, styles.infomationText]}>Gender:</Text>
                    <Text style={[FontSizes.h4, Styles.textWhite, Styles.textBold, styles.infomationText]}>Department:</Text>
                </View>
                <View style={{ marginStart: 10 }}>
                    <Text style={[FontSizes.h4, Styles.textWhite, styles.infomationText]} numberOfLines={1}>{fullName}</Text>
                    <Text style={[FontSizes.h4, Styles.textWhite, styles.infomationText]}>{birthday}</Text>
                    <Text style={[FontSizes.h4, Styles.textWhite, styles.infomationText]}>{gender}</Text>
                    <Text style={[FontSizes.h4, Styles.textWhite, styles.infomationText]} numberOfLines={1}>{department}</Text>
                </View>
            </View>
        </View>
    )
}

export default InfomationBox;

const styles = StyleSheet.create({
    infomationBox: {
        borderColor: Colors.ORANGE,
        borderWidth: 1.5,
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 14,
    },
    circleAvatar: {
        width: 90,
        height: 90,
        borderRadius: 500,
        resizeMode: 'cover'
    },
    infomationText: {
        marginVertical: 4,
        width: 95
    }
})