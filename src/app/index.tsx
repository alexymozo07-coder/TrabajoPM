import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../constants/Colors';

// Título de la app
export default function Header() {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>🎬 ¿Qué veo hoy?</Text>
      <Text style={styles.subtitulo}>Elige un género y una plataforma, y te recomendamos algo.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: { marginBottom: 20 },
  titulo: { color: Colors.texto, fontSize: 28, fontWeight: 'bold' },
  subtitulo: { color: Colors.textoSuave, fontSize: 14, marginTop: 4 },
});