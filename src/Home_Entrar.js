import React from 'react';
import { Text, StyleSheet, View, TextInput, KeyboardAvoidingView, TouchableOpacity, ImageBackground, Image, Animated } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';

export default function Home_Entrar(props) {
   
    return (
        <View style={{position: 'absolute',height: '100%', width: '100%', alignItems: 'center', display: props.display}}>
            <Text style={{ textAlign: 'center', margin: '5%', color: '#b7b7b7', }} >Bem-vindo! Entre ou cadastre-se para desfrutar da nossa comunidade!</Text>
                <View style={{ width: '100%', alignItems: 'center', }}>
                    <MaterialIcons style={{ position: 'absolute', right: '7%', top: '20%' }} name="email" size={24} color="#b7b7b7" />
                    <TextInput style={{ position: 'absolute' }} placeholder="Email" style={styles.input} />
                </View>

                <View style={{ width: '100%', alignItems: 'center' }}>
                    <Entypo style={{ position: 'absolute', right: '7%', top: '20%' }} name="lock" size={24} color="#b7b7b7" />
                    <TextInput style={{ position: 'absolute' }} placeholder="Senha" style={styles.input} />
                </View>
                <TouchableOpacity style={styles.btnEntrar} onPress={() => alert('clicou em entrar')}>
                    <Text style={{ color: '#ffff', fontWeight: 'bold' }}>Entrar</Text>
                </TouchableOpacity>
                <Text style={{ marginTop: '4%', color: '#b7b7b7' }}>Ainda não tem uma conta?</Text>
                <TouchableOpacity onPress={() => props.cadastro()}>
                    <Text style={{ marginBottom: '2%', marginTop: '1%', color: '#484848', opacity: .8 }}>Cadastre-se agora!</Text>
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