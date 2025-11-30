// app/Solicitudes.js
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";

import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const solicitudesMock = [
  {
    id: "1",
    usuario: "Carlos Mendoza",
    mensaje: "Estoy interesado en tus clases de Angular.",
    curso: "Angular desde cero",
    imagen: "https://i.pravatar.cc/150?img=12",
    estado: "pendiente",
  },
  {
    id: "2",
    usuario: "María López",
    mensaje: "Quiero aprender Typescript contigo.",
    curso: "Typescript Básico",
    imagen: "https://i.pravatar.cc/150?img=8",
    estado: "pendiente",
  },
  {
    id: "3",
    usuario: "Raúl García",
    mensaje: "¿Puedes enseñarme conceptos de JS moderno?",
    curso: "Asesorías de JavaScript",
    imagen: "https://i.pravatar.cc/150?img=5",
    estado: "aceptado",
  },
];

export default function SolicitudesScreen() {
  const [solicitudes, setSolicitudes] = useState(solicitudesMock);
  const router = useRouter(); // ✅ AGREGADO

  const cambiarEstado = (id, nuevoEstado) => {
    setSolicitudes((prev) =>
      prev.map((s) => (s.id === id ? { ...s, estado: nuevoEstado } : s))
    );
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      {/* Foto + nombre */}
      <View style={styles.headerRow}>
        <Image source={{ uri: item.imagen }} style={styles.avatar} />
        <View>
          <Text style={styles.usuario}>{item.usuario}</Text>
          <Text style={styles.curso}>{item.curso}</Text>
        </View>
      </View>

      {/* Mensaje */}
      <Text style={styles.mensaje}>{item.mensaje}</Text>

      {/* Estado */}
      <Text
        style={[
          styles.estado,
          item.estado === "aceptado"
            ? { color: "green" }
            : item.estado === "rechazado"
            ? { color: "red" }
            : { color: "#555" },
        ]}
      >
        Estado: {item.estado.toUpperCase()}
      </Text>

      {/* Botones */}
      {item.estado === "pendiente" && (
        <View style={styles.btnRow}>
          <TouchableOpacity
            style={[styles.btn, { backgroundColor: "green" }]}
            onPress={() => cambiarEstado(item.id, "aceptado")}
          >
            <Ionicons name="checkmark" size={18} color="#fff" />
            <Text style={styles.btnText}>Aceptar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.btn, { backgroundColor: "red" }]}
            onPress={() => cambiarEstado(item.id, "rechazado")}
          >
            <Ionicons name="close" size={18} color="#fff" />
            <Text style={styles.btnText}>Rechazar</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Botón conectar cuando ya aceptó */}
      {item.estado === "aceptado" && (
        <TouchableOpacity
          style={styles.connectBtn}
          onPress={() => {
            const sala = `solicitud_${item.id}_${item.usuario.replace(" ", "_")}`;
            router.push(`/videoCall?room=${sala}`); // ✅ Ya funciona
          }}
        >
          <Ionicons name="chatbubbles-outline" size={18} color="#fff" />
          <Text style={styles.connectText}>Conectarse</Text>
        </TouchableOpacity>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>📩 Solicitudes recibidas</Text>

      <FlatList
        data={solicitudes}
        renderItem={renderItem}
        keyExtractor={(i) => i.id}
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
    padding: 18,
    marginBottom: 15,
    borderLeftWidth: 5,
    borderLeftColor: "#008470ff",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 5,
  },

  headerRow: { flexDirection: "row", alignItems: "center", marginBottom: 12 },

  avatar: { width: 55, height: 55, borderRadius: 50, marginRight: 15 },

  usuario: { fontSize: 18, fontWeight: "700", color: "#1e3d59" },

  curso: { fontSize: 14, color: "#008470ff" },

  mensaje: { fontSize: 14, color: "#444", marginBottom: 10 },

  estado: { fontSize: 15, fontWeight: "600", marginBottom: 10 },

  btnRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },

  btn: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    gap: 6,
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 3,
  },

  btnText: { color: "#fff", fontWeight: "bold" },

  connectBtn: {
    backgroundColor: "#008470ff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    borderRadius: 10,
    marginTop: 10,
    gap: 6,
  },

  connectText: { color: "#fff", fontWeight: "bold", fontSize: 15 },
});
