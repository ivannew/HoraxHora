import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const postulaciones = [
  {
    id: "1",
    titulo: "Clases de Angular",
    descripcion: "Ofrezco ayuda con framework angular.",
    usuario: "Ana Pérez",
    horas: 2,
    imagen: "https://i.ibb.co/TBXXbPh6/65d65a2a9abbec35593a1394-Angular-NES-Announcement.png"
  },
  {
    id: "2",
    titulo: "Clases de Typescript",
    descripcion: "Ofrezco ayuda con framework Typescript.",
    usuario: "Luis García",
    horas: 1,
    imagen: "https://i.ibb.co/4wZPLbS6/od-Pa-QHSb-Ar-SIFz-Zb-Uzl-E-1740483365.jpg"
  },
  {
    id: "3",
    titulo: "Asesoría en Programación",
    descripcion: "Te ayudo a entender JavaScript y React Native.",
    usuario: "María López",
    horas: 3,
    imagen: "https://i.ibb.co/Y77xHMgq/images-10.jpg"
  }
];

export default function HomeScreen() {
  const router = useRouter();

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.imagen }} style={styles.cardImage} />

      <View style={styles.cardHeader}>
        <Ionicons name="briefcase-outline" size={22} color="#1e88e5" />
        <Text style={styles.title}>{item.titulo}</Text>
      </View>

      <Text style={styles.desc}>{item.descripcion}</Text>

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

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
         router.push({
      pathname: "/cursoDetalle",
      params: { item: JSON.stringify(item) }
    })
        }
      >
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
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f2f6fc", padding: 20 },
  header: { fontSize: 24, fontWeight: "700", marginBottom: 20, color: "#1e3d59" },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    paddingHorizontal: 18,
    paddingBottom: 18,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 5,
    borderLeftWidth: 5,
    borderLeftColor: "#008470ff",
  },
  cardImage: {
    width: "100%",
    height: 140,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    marginBottom: 12,
  },
  cardHeader: { flexDirection: "row", alignItems: "center", marginBottom: 10 },
  title: { fontSize: 18, fontWeight: "bold", color: "#1e3d59", marginLeft: 8 },
  desc: { fontSize: 14, color: "#4a4a4a", marginBottom: 15, lineHeight: 20 },
  infoRow: { flexDirection: "row", justifyContent: "space-between", marginBottom: 15 },
  infoItem: { flexDirection: "row", alignItems: "center", gap: 5 },
  infoText: { fontSize: 14, color: "#555" },
  button: {
    backgroundColor: "#008470ff",
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  btnText: { color: "#fff", fontWeight: "bold", fontSize: 15 },
});
