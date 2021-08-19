import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import Preload from './src/Preload';
import Home from './src/Home';

export default function App() {
  const [tela, setTela] = useState(<Preload/>)
  {
    setTimeout(() => {
      setTela(<Home/>)
    }, 8000);
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