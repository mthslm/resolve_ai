import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import Preload from './src/Preload';
import Inicial from './src/Inicial';

export default function App() {
  const [tela, setTela] = useState(<Preload/>)
  {
    setTimeout(() => {
      setTela(<Inicial/>)
    }, 1000);
  }

  return (
    <View style={styles.container}>
      {tela}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});