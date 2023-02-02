// Imports
import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import ElButton from './componentes/ElButton';
import Imagen from './componentes/Imagen';
import PideTexto from './componentes/PideTexto';
import Saludo from './componentes/Saludo';

// Componente App
function App(): JSX.Element {
  return (
    <SafeAreaView>
      <PideTexto />
      <ElButton />
      <ScrollView contentInsetAdjustmentBehavior = "automatic">
        <Saludo name = "Arriba" />
        <Imagen />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;