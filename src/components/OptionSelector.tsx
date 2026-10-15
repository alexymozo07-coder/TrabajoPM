import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../constants/Colors';

type Props = {
  titulo: string; // Ej: "Género"
  opciones: string[]; // Lista de opciones
  seleccionada: string; // Opción activa
  onSeleccionar: (opcion: string) => void;
};

// Fila de botones para elegir una opción. Se usa para género y para plataforma.
export default function OptionSelector({ titulo, opciones, seleccionada, onSeleccionar }: Props) {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>{titulo}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {opciones.map((opcion) => {
          const activa = opcion === seleccionada;
          return (
            <Pressable
              key={opcion}
              onPress={() => onSeleccionar(opcion)}
              style={[styles.opcion, activa && styles.opcionActiva]}
            >
              <Text style={styles.texto}>{opcion}</Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: { marginBottom: 16 },
  titulo: { color: Colors.texto, fontSize: 16, fontWeight: '600', marginBottom: 8 },
  opcion: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.borde,
    backgroundColor: Colors.tarjeta,
    marginRight: 8,
  },
  opcionActiva: { backgroundColor: Colors.principal, borderColor: Colors.principal },
  texto: { color: Colors.texto },
});
