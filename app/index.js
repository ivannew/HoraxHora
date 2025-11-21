import { Ionicons } from "@expo/vector-icons"; // 👈 asegúrate de tenerlo (viene con Expo)
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const postulaciones = [
  {
    id: "1",
    titulo: "Clases de Matemáticas",
    descripcion: "Ofrezco ayuda con cálculo diferencial e integral.",
    usuario: "Ana Pérez",
    horas: 2,
  },
  {
    id: "2",
    titulo: "Diseño de Presentaciones",
    descripcion: "Puedo crear diapositivas profesionales en PowerPoint o Canva.",
    usuario: "Luis García",
    horas: 1,
  },
  {
    id: "3",
    titulo: "Asesoría en Programación",
    descripcion: "Te ayudo a entender JavaScript y React Native.",
    usuario: "María López",
    horas: 3,
  },
    {
    id: "4",
    titulo: "Asesoría en Programación",
    descripcion: "Te ayudo a entender JavaScript y React Native.",
    usuario: "María López",
    horas: 3,
  },
    {
    id: "5",
    titulo: "Asesoría en Programación",
    descripcion: "Te ayudo a entender JavaScript y React Native.",
    usuario: "María López",
    horas: 3,
  },
];

export default function HomeScreen() {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      {/* Encabezado */}
      <View style={styles.cardHeader}>
        <Ionicons name="briefcase-outline" size={22} color="#1e88e5" />
        <Text style={styles.title}>{item.titulo}</Text>
      </View>

      {/* Descripción */}
      <Text style={styles.desc}>{item.descripcion}</Text>

      {/* Información del usuario */}
      <View style={styles.infoRow}>
        <View style={styles.infoItem}>
          <Ionicons name="person-circle-outline" size={18} color="#555" />
          <Text style={styles.infoText}>{item.usuario}</Text>
        </View>

        <View style={styles.infoItem}>
          <Ionicons name="time-outline" size={18} color="#555" />
          <Text style={styles.infoText}>{item.horas} h</Text>
        </View>
      </View>

      {/* Botón */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.btnText}>Postularme</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Cursos</Text>

      <FlatList
        data={postulaciones}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f6fc",
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 20,
    color: "#1e3d59",
  },
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
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1e3d59",
    marginLeft: 8,
  },
  desc: {
    fontSize: 14,
    color: "#4a4a4a",
    marginBottom: 15,
    lineHeight: 20,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  infoText: {
    fontSize: 14,
    color: "#555",
  },
  button: {
    backgroundColor: "#008470ff",
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  btnText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
  },
});
