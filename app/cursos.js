import { Ionicons } from "@expo/vector-icons";
import { FlatList, StyleSheet, Text, View } from "react-native";

const cursos = [
  {
    id: "1",
    titulo: "Curso de Angular",
    terminado: true,
    horas: 10,
  },
  {
    id: "2",
    titulo: "Curso de React Native",
    terminado: false,
    horas: 6,
  },
  {
    id: "3",
    titulo: "Curso de Typescript",
    terminado: true,
    horas: 4,
  },
];

export default function CursosScreen() {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Ionicons
          name={item.terminado ? "checkmark-circle" : "close-circle"}
          size={26}
          color={item.terminado ? "green" : "red"}
        />

        <Text style={styles.title}>{item.titulo}</Text>
      </View>

      <Text style={styles.horas}>Duración: {item.horas} horas</Text>

      <Text
        style={[
          styles.estado,
          { color: item.terminado ? "green" : "red" },
        ]}
      >
        {item.terminado ? "Terminado" : "No terminado"}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Mis cursos</Text>

      <FlatList data={cursos} renderItem={renderItem} keyExtractor={(i) => i.id} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f2f6fc", padding: 20 },
  header: { fontSize: 24, fontWeight: "700", marginBottom: 20, color: "#1e3d59" },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 18,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 5,
    borderLeftWidth: 5,
    borderLeftColor: "#008470ff",
  },
  cardHeader: { flexDirection: "row", alignItems: "center", marginBottom: 10 },
  title: { fontSize: 18, fontWeight: "bold", color: "#1e3d59", marginLeft: 10 },
  horas: { fontSize: 14, color: "#555", marginBottom: 10 },
  estado: { fontWeight: "bold", fontSize: 16 },
});
