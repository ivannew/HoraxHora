import { Image, StyleSheet, Text, View } from "react-native";

export default function DetalleScreen({ route }) {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: item.imagen }} style={styles.banner} />

      <Text style={styles.title}>{item.titulo}</Text>
      <Text style={styles.desc}>{item.descripcion}</Text>

      <Text style={styles.info}>Profesor: {item.usuario}</Text>
      <Text style={styles.info}>Duración: {item.horas} horas</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff"
  },
  banner: {
    width: "100%",
    height: 180,
    borderRadius: 12,
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10
  },
  desc: {
    fontSize: 16,
    marginBottom: 20
  },
  info: {
    fontSize: 16,
    marginBottom: 8,
    color: "#444"
  }
});
