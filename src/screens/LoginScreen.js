import { StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
import { Colors, Styles } from '../ultils'
import { Background, HeaderGroup } from '../components';

const LoginScreen = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorUsername, setErrorUsername] = useState('');
    const [errorPassword, setErrorPassword] = useState('');

    return (
        <View style={[Styles.container, Styles.alignItemsCenter, Styles.justifyContentCenter]}>
            <StatusBar backgroundColor={Colors.BLACK} />
            <Background />
            <HeaderGroup />

            <View style={styles.formGroup}>
                <TextInput style={styles.formControl}
                    placeholder="Enter your user name"
                    autoCapitalize='none'
                    placeholderTextColor={Colors.WHITE} />
                <Text style={styles.error}>{errorUsername}</Text>

                <TextInput style={styles.formControl}
                    placeholder="Enter your password"
                    secureTextEntry
                    autoCapitalize='none'
                    placeholderTextColor={Colors.WHITE} />
                <Text style={styles.error}>{errorPassword}</Text>

                <TouchableOpacity style={styles.btnForm}
                    activeOpacity={.7}>
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
        flex: 3
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
        borderColor: Colors.ORANGE,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 50,
        marginTop: 20,
        backgroundColor: Colors.ORANGE
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