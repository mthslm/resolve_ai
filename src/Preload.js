import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Logo from '../assets/resolveailogocolorida.fw.svg';
import LottieView from 'lottie-react-native';

export default function Preload() {
  return (
    <View style={styles.container}>
      <Logo width="70%" />
      <LottieView style={{ width: "60%" }} source={require('../assets/6843-map-location.json')} autoPlay loop />
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
  });