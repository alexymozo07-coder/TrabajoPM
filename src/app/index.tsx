import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import Header from '../components/Header';
import OptionSelector from '../components/OptionSelector';
import { Colors } from '../constants/Colors';
import { genres, platforms } from '../data/movies';

export default function HomeScreen() {
  const [genre, setGenre] = useState('Todos');
  const [platform, setPlatform] = useState('Todas');

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.fondo, padding: 20 }}>
      <Header />

      <OptionSelector titulo="Género" opciones={genres} seleccionada={genre} onSeleccionar={setGenre} />
      <OptionSelector titulo="Plataforma" opciones={platforms} seleccionada={platform} onSeleccionar={setPlatform} />
    </SafeAreaView>
  );
}