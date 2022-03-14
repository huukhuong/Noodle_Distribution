import {
    StyleSheet,
    StatusBar,
    View,
    Image,
    TouchableOpacity,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors, Constants, Styles } from '../ultils'
import { Background, ButtonSelectNoodle, HeaderGroup, InfomationBox } from '../components';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

const InfomationScreen = ({ navigation }) => {

    const [cups, setCups] = useState([false, false, false]);

    const [avatar, setAvatar] = useState({ uri: 'https://www.chanchao.com.tw/vietnamwood/images/default.jpg' });
    const [fullname, setFullname] = useState('loading...');
    const [birthday, setBirthday] = useState('loading...');
    const [gender, setGender] = useState('loading...');
    const [department, setDepartment] = useState('loading...');

    useEffect(() => {
        firestore()
            .collection('Users')
            .doc(auth().currentUser.email)
            .get()
            .then(data => {
                // get user info from firestore
                const user = data._data;
                setFullname(user.fullname);
                setBirthday(user.birthday);
                setGender(user.gender);
                setDepartment(user.department);

                // get image on storage
                storage()
                    .ref(user.avatar)
                    .getDownloadURL()
                    .then(url => setAvatar({ uri: url }))
                    .catch(e => setAvatar({ uri: 'https://www.chanchao.com.tw/vietnamwood/images/default.jpg' }));
            });
    }, [navigation]);

    return (
        <View style={Styles.container}>
            <StatusBar backgroundColor={Colors.BLACK} />
            <Background />
            <HeaderGroup
                title={Constants.INFOMATION_IMG}
                titleWidth={260} />

            <View style={{ flex: 1, paddingHorizontal: 24 }}>
                <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
                    <InfomationBox
                        avatar={avatar}
                        fullName={fullname}
                        birthday={birthday}
                        gender={gender}
                        department={department} />
                </TouchableOpacity>

                <View style={[
                    Styles.row,
                    Styles.alignItemsCenter,
                    Styles.justifyContentBetween,
                    { marginTop: 15 }
                ]}>
                    <ButtonSelectNoodle
                        onPress={() => setCups([!cups[0], cups[1], cups[2]])}
                        isPicked={cups[0]} />
                    <ButtonSelectNoodle
                        onPress={() => setCups([cups[0], !cups[1], cups[2]])}
                        isPicked={cups[1]} />
                    <ButtonSelectNoodle
                        onPress={() => setCups([cups[0], cups[1], !cups[2]])}
                        isPicked={cups[2]} />
                </View>
                <Image
                    source={Constants.THREE_CUP_OF_NOODLES_LEFT_THIS_MONTH}
                    style={{
                        marginTop: 5,
                        alignSelf: 'center',
                        resizeMode: 'center'
                    }} />
                <TouchableOpacity
                    activeOpacity={.8}
                    onPress={() => navigation.navigate('Done')}>
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