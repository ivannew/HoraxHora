import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function PerfilScreen() {
  const [usuario] = useState({
    nombre: "Juan Pérez",
    correo: "juan.perez@example.com",
    telefono: "6401234567",
    servicios: 12,
  });

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>👤 Tu Perfil</Text>

      {/* Tarjeta principal */}
      <View style={styles.card}>
        <View style={styles.avatarContainer}>
          <Image
            source={{ uri: "https://i.pravatar.cc/200" }}
            style={styles.avatar}
          />
          <Text style={styles.nombre}>{usuario.nombre}</Text>
          <Text style={styles.correo}>{usuario.correo}</Text>
        </View>

        {/* Info */}
        <View style={styles.infoItem}>
          <Ionicons name="call-outline" size={20} color="#008470ff" />
          <Text style={styles.infoText}>{usuario.telefono}</Text>
        </View>

        <View style={styles.infoItem}>
          <Ionicons name="briefcase-outline" size={20} color="#008470ff" />
          <Text style={styles.infoText}>
            Servicios publicados: {usuario.servicios}
          </Text>
        </View>

        {/* Botón editar */}
        <TouchableOpacity style={styles.button}>
          <Ionicons name="create-outline" size={18} color="#fff" />
          <Text style={styles.btnText}>Editar Perfil</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#f2f6fc",
    padding: 20,
    alignItems: "center",
  },
  header: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1e3d59",
    marginBottom: 20,
    alignSelf: "flex-start",
  },
  card: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 4,
    borderLeftWidth: 5,
    borderLeftColor: "#008470ff",
  },

  avatarContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 50,
    marginBottom: 10,
  },
  nombre: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1e3d59",
  },
  correo: {
    color: "#555",
    marginBottom: 10,
  },

  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f8f9fb",
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#e0e6ed",
    gap: 10,
  },
  infoText: {
    fontSize: 16,
    color: "#333",
  },

  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#008470ff",
    paddingVertical: 12,
    borderRadius: 10,
    marginTop: 10,
    gap: 6,
  },
  btnText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
