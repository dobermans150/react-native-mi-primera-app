import React from 'react';
import { SafeAreaView } from 'react-native';
import { TareaScreen } from './src/screens/TareaScreen';

const App = () => {
  return (
    /*  <HolaMundoScreen /> */
    <SafeAreaView style={{ flex: 1, backgroundColor: '#28425B' }}>
      <TareaScreen />
    </SafeAreaView>

  );
};

export default App;
