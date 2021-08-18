import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Text, StyleSheet, View, TextInput, KeyboardAvoidingView, TouchableOpacity, ImageBackground, Image } from 'react-native';
import Logo from '../assets/resolveailogocolorida.fw.svg';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BlurView } from 'expo-blur';


export default function Login() {

    return (
        <SafeAreaView style={styles.containerGlobal}>
            <ImageBackground style={{ width: '100%', height: '110%',top:'-10%',  }} source={require('../assets/background.jpg')}>
                <Text style={{margin: '10%', marginTop: "70%", color: '#ffff', fontWeight: 'bold', fontSize: 30,textShadowColor: 'black',textShadowRadius: 1.4}}>Mapeie problemas. Encontre soluções!</Text>
            </ImageBackground>
            <View style={styles.container1}>

            </View>
            <View style={styles.container2}>
                <Text style={{textAlign: 'center', margin: '5%', color: '#b7b7b7',}} >Bem-vindo! Entre ou cadastre-se para desfrutar da nossa comunidade!</Text>
                <TextInput placeholder="Email" style={styles.input} />
                <TextInput placeholder="Senha" style={styles.input}/>
                <TouchableOpacity style={styles.btnEntrar}>
                    <Text style={{color: '#ffff',fontWeight: 'bold'}}>Entrar</Text>
                </TouchableOpacity>
                <Text style={{marginTop: '4%',color:'#b7b7b7'}}>Ainda não tem uma conta?</Text>
                <TouchableOpacity>
                    <Text style={{marginBottom: '2%',marginTop:'1%',color:'#484848',opacity: .8}}>Cadastre-se agora!</Text>
                </TouchableOpacity>
            </View>
            <StatusBar style="dark" />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    containerGlobal: {
        flex: 1,
        position: 'relative',
    },
    container1: {
        position: 'absolute',
        backgroundColor: '#e9e9e9',
        width: '110%',
        height: '42%',
        alignSelf: 'center',
        borderTopRightRadius: 50,
        borderTopLeftRadius: 100,
        bottom: 0,
        opacity: .9
    },
    container2: {
        position: 'absolute',
        backgroundColor: '#ffff',
        width: '90%',
        height: '50%',
        bottom: '5%',
        alignSelf: 'center',
        borderRadius: 30,
        alignItems: 'center',
    },
    input: {
        width: '90%',
        borderWidth: 1,
        margin: '2%',
        padding: '4%',
        borderRadius: 7,
        borderColor: '#b7b7b7',
    },
    btnEntrar: {
        width: '90%',
        alignItems: 'center',
        padding: '4%',
        margin: '2%',
        backgroundColor: '#F26363',
        borderRadius: 7,
    }

});