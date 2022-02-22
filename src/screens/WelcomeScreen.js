import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { LogoAlta } from '../components';
import { Styles } from '../ultils';

const HomeScreen = () => {
    return (
        <SafeAreaView styles={Styles.container}>
            <LogoAlta
                height={80} />
                
            <Image
                source={require('../assets/welcome.png')}
                style={{
                    width: '100%',
                    resizeMode: 'center'
                }} />
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({

});