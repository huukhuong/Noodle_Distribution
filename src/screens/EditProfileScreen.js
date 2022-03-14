import {
    StyleSheet,
    Image,
    View,
    Text,
    TouchableOpacity,
    TextInput
} from 'react-native'
import React, { useState, useEffect } from 'react'
import { Background } from '../components'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import { Colors, Styles } from '../ultils'
import * as ImagePicker from 'react-native-image-picker';

const EditProfileScreen = ({ navigation }) => {

    const [fullname, setFullname] = useState('');
    const [birthday, setBirthday] = useState('');
    const [gender, setGender] = useState('');
    const [department, setDepartment] = useState('');
    const [avatar, setAvatar] = useState({ uri: 'https://www.chanchao.com.tw/vietnamwood/images/default.jpg' });
    let oldAvatar;

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
        oldAvatar = avatar;
    }, [])

    const changeAvatar = () => {
        const options = {
            maxWidth: 2000,
            maxHeight: 2000,
            storageOptions: {
                skipBackup: true,
                path: 'images'
            }
        };
        ImagePicker.launchImageLibrary(options, response => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = { uri: response.assets[0].uri };
                setAvatar(source);
            }
        });
    }

    const uploadImage = async () => {
        const { uri } = avatar;
        const filename = uri.substring(uri.lastIndexOf('/') + 1);
        const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;
        firestore()
            .collection('Users')
            .doc(auth().currentUser.email)
            .set({
                avatar: filename,
                birthday: "25/10/2001",
                department: "Internship",
                fullname: "Trần Hữu Khương",
                gender: "Male"
            });
        if (oldAvatar != avatar) {
            console.log('Start upload');
            await storage()
                .ref(filename)
                .putFile(uploadUri);
            console.log('Upload success');
        }
        alert("Update successfully");   
    }

    return (
        <View style={[Styles.container]}>
            <Background />

            <View style={styles.form}>
                <Text style={[Styles.textWhite, Styles.textCenter, {
                    fontSize: 24,
                    fontWeight: 'bold',
                    paddingVertical: 20,
                    textTransform: 'uppercase'
                }]}>Update profile</Text>
                <View style={Styles.alignItemsCenter}>
                    <TouchableOpacity
                        activeOpacity={.8}
                        onPress={changeAvatar}>
                        <Image source={avatar} style={styles.avatar} />
                    </TouchableOpacity>
                </View>

                <View style={styles.formGroup}>
                    <Text style={styles.formLabel}>Fullname</Text>
                    <TextInput style={styles.formControl}
                        value={fullname}
                        onChangeText={(text) => setFullname(text)}
                        autoComplete='name' />
                </View>

                <View style={styles.formGroup}>
                    <Text style={styles.formLabel}>Birthday</Text>
                    <TextInput style={styles.formControl}
                        value={birthday}
                        onChangeText={(text) => setBirthday(text)}
                        autoComplete='birthdate-day' />
                </View>

                <View style={styles.formGroup}>
                    <Text style={styles.formLabel}>Department</Text>
                    <TextInput style={styles.formControl}
                        value={department}
                        onChangeText={(text) => setDepartment(text)} />
                </View>

                <View style={styles.formGroup}>
                    <Text style={styles.formLabel}>Gender</Text>
                    <TextInput style={styles.formControl}
                        value={gender}
                        onChangeText={(text) => setGender(text)}
                        autoComplete='gender' />
                </View>

                <TouchableOpacity activeOpacity={.8} onPress={uploadImage}>
                    <Text style={styles.button}>Save</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default EditProfileScreen

const styles = StyleSheet.create({
    form: {
        marginHorizontal: 24,
        marginTop: 30
    },
    avatar: {
        marginVertical: 10,
        width: 120,
        height: 120,
        borderRadius: 500,
        resizeMode: 'cover'
    },
    formGroup: {
        marginVertical: 10,
    },
    formLabel: {
        color: Colors.WHITE,
        marginStart: 4,
        color: "#ccc"
    },
    formControl: {
        borderBottomWidth: 2,
        borderColor: Colors.ORANGE,
        color: Colors.WHITE
    },
    button: {
        textAlign: 'center',
        fontSize: 20,
        backgroundColor: Colors.ORANGE_LIGHT,
        color: Colors.WHITE,
        padding: 8,
        marginVertical: 20,
        borderRadius: 50
    }
})