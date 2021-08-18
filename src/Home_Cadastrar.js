import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef } from 'react';
import { Button, Text, StyleSheet, View, TextInput, KeyboardAvoidingView, TouchableOpacity, ImageBackground, Image, Animated } from 'react-native';
import Logo from '../assets/resolveailogocolorida.fw.svg';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';

export default function Home_Cadastrar() {
    return (
        <View style={{position: 'absolute',height: '100%', width: '100%', alignItems: 'center'}}>
            <Text style={{ textAlign: 'center', margin: '5%', color: '#b7b7b7', }} >Preencha os dados para se cadastrar!</Text>
                <View style={{ width: '100%', alignItems: 'center', }}>
                    <MaterialIcons style={{ position: 'absolute', right: '7%', top: '20%' }} name="email" size={24} color="#b7b7b7" />
                    <TextInput style={{ position: 'absolute' }} placeholder="Nome" style={styles.input} />
                </View>

                <View style={{ width: '100%', alignItems: 'center' }}>
                    <Entypo style={{ position: 'absolute', right: '7%', top: '20%' }} name="lock" size={24} color="#b7b7b7" />
                    <TextInput style={{ position: 'absolute' }} placeholder="Email" style={styles.input} />
                </View>
                <View style={{ width: '100%', alignItems: 'center' }}>
                    <Entypo style={{ position: 'absolute', right: '7%', top: '20%' }} name="lock" size={24} color="#b7b7b7" />
                    <TextInput style={{ position: 'absolute' }} placeholder="Senha" style={styles.input} />
                </View>
                <View style={{ width: '100%', alignItems: 'center' }}>
                    <Entypo style={{ position: 'absolute', right: '7%', top: '20%' }} name="lock" size={24} color="#b7b7b7" />
                    <TextInput style={{ position: 'absolute' }} placeholder="Repita a senha" style={styles.input} />
                </View>
                <View style={{ width: '100%', alignItems: 'center' }}>
                    <Entypo style={{ position: 'absolute', right: '7%', top: '20%' }} name="lock" size={24} color="#b7b7b7" />
                    <TextInput style={{ position: 'absolute' }} placeholder="Data de nascimento" style={styles.input} />
                </View>
                <TouchableOpacity style={styles.btnEntrar} onPress={() => alert('clicou em entrar')}>
                    <Text style={{ color: '#ffff', fontWeight: 'bold' }}>Cadastrar</Text>
                </TouchableOpacity>
                <Text style={{ marginTop: '4%', color: '#b7b7b7' }}>Você já possui uma conta?</Text>
                <TouchableOpacity onPress={[logar]}>
                    <Text style={{ marginBottom: '2%', marginTop: '1%', color: '#484848', opacity: .8 }}>Entre agora mesmo!</Text>
                </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        width: '90%',
        borderWidth: 1,
        margin: '2%',
        padding: '4%',
        borderRadius: 7,
        borderColor: '#b7b7b7',
        borderTopLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    btnEntrar: {
        width: '90%',
        alignItems: 'center',
        padding: '4%',
        margin: '2%',
        backgroundColor: '#F26363',
        borderRadius: 7,
        borderTopLeftRadius: 30,
        borderBottomRightRadius: 30,
    }
});