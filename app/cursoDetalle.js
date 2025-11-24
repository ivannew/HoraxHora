import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function CursoDetalle() {
  const router = useRouter();
  const { item } = useLocalSearchParams(); // recibe el curso

  const curso = JSON.parse(item); // convertir string → objeto

  return (
    <View style={styles.container}>
      <Image source={{ uri: curso.imagen }} style={styles.image} />

      <Text style={styles.title}>{curso.titulo}</Text>
      <Text style={styles.description}>{curso.descripcion}</Text>

      <View style={styles.infoRow}>
        <Ionicons name="person-circle-outline" size={22} color="#555" />
        <Text style={styles.infoText}>{curso.usuario}</Text>
      </View>

      <View style={styles.infoRow}>
        <Ionicons name="time-outline" size={22} color="#555" />
        <Text style={styles.infoText}>{curso.horas} horas</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => router.back()}>
        <Text style={styles.btnText}>Regresar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f2f6fc" },
  image: { width: "100%", height: 200, borderRadius: 12, marginBottom: 20 },
  title: { fontSize: 24, fontWeight: "bold", color: "#1e3d59", marginBottom: 10 },
  description: { fontSize: 16, color: "#333", marginBottom: 20, lineHeight: 22 },
  infoRow: { flexDirection: "row", alignItems: "center", marginBottom: 10 },
  infoText: { marginLeft: 8, fontSize: 16, color: "#555" },
  button: {
    marginTop: 25,
    backgroundColor: "#008470ff",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  btnText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});
