import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef } from 'react';
import { Text, StyleSheet, View, KeyboardAvoidingView, ImageBackground, Animated, Dimensions } from 'react-native';
import Entrar from './Inicial_Entrar';
import Cadastrar from './Inicial_Cadastrar';

export default function Home() {

    const baixo = useRef(new Animated.Value(100)).current;
    const altura = useRef(new Animated.Value(330)).current;
    const topo = useRef(new Animated.Value(0)).current;
    const [displayCadastro, setDisplayCadastro] = useState('flex');
    const [displayLogar, setDisplayLogar] = useState('none');

    const cadastro = () => {
        setTimeout(() => {
            setDisplayCadastro('none'),
            setDisplayLogar('flex')
        }, 800),
        Animated.sequence([
            Animated.timing(
                baixo,
                {
                    toValue: -280,
                    duration: 800,
                    useNativeDriver: false,

                }
            ),
            Animated.timing(
                topo,
                {
                    toValue: -170,
                    duration: 900,
                    useNativeDriver: false,
                }
            ),
            Animated.timing(
                altura,
                {
                    toValue: 500,
                    duration: 800,
                    useNativeDriver: false,
                }
            ),
            Animated.timing(
                baixo,
                {
                    toValue: 100,
                    duration: 500,
                    useNativeDriver: false,
                }
            )

        ]).start();
    };

    const logar = () => {
        setTimeout(() => {
            setDisplayCadastro('flex'),
            setDisplayLogar('none')
        }, 800),
        Animated.sequence([
            Animated.timing(
                baixo,
                {
                    toValue: -420,
                    duration: 800,
                    useNativeDriver: false,

                }
            ),

            Animated.timing(
                topo,
                {
                    toValue: 0,
                    duration: 900,
                    useNativeDriver: false,
                }
            ),
            Animated.timing(
                altura,
                {
                    toValue: 330,
                    duration: 800,
                    useNativeDriver: false,
                }
            ),
            Animated.timing(
                baixo,
                {
                    toValue: 100,
                    duration: 500,
                    useNativeDriver: false,
                }
            )

        ]).start();
    };

    return (

        <KeyboardAvoidingView behavior="position" style={styles.containerGlobal} enabled>

            <ImageBackground style={{ width: '100%', height: '110%', top: '-10%', }} source={require('../assets/background.jpg')}>
                <Animated.View style={{ top: topo }}><Text style={{ marginTop: "78%", color: '#ffff', fontWeight: 'bold', fontSize: 30, textShadowColor: 'black', textShadowRadius: 1.4, left: '20%' }}>Mapeie problemas. Encontre solu????es!</Text></Animated.View>
            </ImageBackground>

            <View style={styles.container1}>

            </View>

            <Animated.View style={[styles.container2, { bottom: baixo, height: altura }]}>
                <Entrar display={displayCadastro} cadastro={cadastro}/>
                <Cadastrar display={displayLogar} logar={logar}/>
            </Animated.View>
            <StatusBar style="dark" />

        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    containerGlobal: {
        flex: 1,
        position: 'relative',
    },
    container1: {
        position: 'absolute',
        backgroundColor: '#fff',
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
        height: '45%',
        alignSelf: 'center',
        borderRadius: 30,
        alignItems: 'center',
        borderTopLeftRadius: 60,
        borderBottomRightRadius: 60,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowRadius: 2,
        shadowOpacity: .1,
    },


});