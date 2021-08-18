import React from 'react';
import { StyleSheet, View } from 'react-native';
import Preload from './src/Preload';
import Home from './src/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <Home/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});