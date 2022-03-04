import { StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react';
import { Colors, Constants, Styles } from '../ultils'
import { Background, HeaderGroup } from '../components';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const LoginScreen = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [erroremail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');

    const onPressLogin = () => {
        auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {

            })
            .catch((error) => {
                setErrorEmail('');
                setErrorPassword('');
                if (error.code === "auth/user-not-found") {
                    setErrorEmail("User not found");
                }
                if (error.code === "auth/wrong-password") {
                    setErrorPassword("Wrong password");
                }
            });
    }

    useEffect(() => {
        if (auth().currentUser) {
            navigation.navigate('Infomation');
        }
    }, [])


    return (
        <View style={[Styles.container, Styles.alignItemsCenter, Styles.justifyContentCenter]}>
            <StatusBar backgroundColor={Colors.BLACK} />
            <Background />
            <HeaderGroup
                title={Constants.WELCOME_IMG} />

            <View style={styles.formGroup}>
                <TextInput style={styles.formControl}
                    placeholder="Enter your email"
                    autoCapitalize='none'
                    keyboardType='email-address'
                    autoComplete='email'
                    placeholderTextColor={Colors.WHITE}
                    value={email}
                    onChangeText={value => setEmail(value)} />
                <Text style={styles.error}>{erroremail}</Text>

                <TextInput style={styles.formControl}
                    placeholder="Enter your password"
                    secureTextEntry
                    autoCapitalize='none'
                    placeholderTextColor={Colors.WHITE}
                    value={password}
                    onChangeText={value => setPassword(value)} />
                <Text style={styles.error}>{errorPassword}</Text>

                <TouchableOpacity style={styles.btnForm}
                    activeOpacity={.7}
                    onPress={onPressLogin}>
                    <Text style={styles.btnText}>Login</Text>
                </TouchableOpacity>
                <View style={[Styles.row, Styles.justifyContentCenter, Styles.alignItemsCenter]}>
                    <Text style={Styles.textWhite}>
                        {"New user?"}
                    </Text>
                    <TouchableOpacity style={{ paddingVertical: 20, paddingHorizontal: 5 }}
                        activeOpacity={.7}>
                        <Text style={{ color: Colors.ORANGE_LIGHT }}>Create an account</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default LoginScreen;

const styles = StyleSheet.create({
    formGroup: {
        paddingHorizontal: 24,
        width: '100%',
        flex: 1.5
    },
    formControl: {
        marginTop: 20,
        marginBottom: 5,
        borderBottomWidth: 2,
        borderBottomColor: Colors.ORANGE_LIGHT,
        color: Colors.WHITE,
        opacity: .6,
        height: 44,
        paddingHorizontal: 4,
        fontSize: 16,
    },
    btnForm: {
        borderColor: Colors.ORANGE_LIGHT,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 50,
        marginTop: 20,
        backgroundColor: Colors.ORANGE_LIGHT
    },
    btnText: {
        color: Colors.WHITE,
        fontSize: 18,
        textTransform: 'uppercase'
    },
    error: {
        color: Colors.RED
    }
})