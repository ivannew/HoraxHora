import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function PublicarScreen() {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [horas, setHoras] = useState("");

  const handleSubmit = () => {
    if (!titulo || !descripcion || !horas) {
      Alert.alert("Campos incompletos", "Por favor llena todos los campos.");
      return;
    }

    Alert.alert("✅ Servicio publicado", `Has publicado: ${titulo}`);
    setTitulo("");
    setDescripcion("");
    setHoras("");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>📝 Publicar nuevo servicio</Text>

      <View style={styles.card}>
        <View style={styles.inputGroup}>
          <Ionicons name="briefcase-outline" size={20} color="#008470ff" />
          <TextInput
            style={styles.input}
            placeholder="Título del servicio"
            placeholderTextColor="#888"
            value={titulo}
            onChangeText={setTitulo}
          />
        </View>

        <View style={[styles.inputGroup, { alignItems: "flex-start" }]}>
          <Ionicons name="document-text-outline" size={20} color="#008470ff" style={{ marginTop: 5 }} />
          <TextInput
            style={[styles.input, { height: 100, textAlignVertical: "top" }]}
            placeholder="Descripción detallada..."
            placeholderTextColor="#888"
            value={descripcion}
            multiline
            onChangeText={setDescripcion}
          />
        </View>

        <View style={styles.inputGroup}>
          <Ionicons name="time-outline" size={20} color="#008470ff" />
          <TextInput
            style={styles.input}
            placeholder="Horas estimadas"
            placeholderTextColor="#888"
            value={horas}
            onChangeText={setHoras}
            keyboardType="numeric"
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Ionicons name="send-outline" size={18} color="#fff" />
          <Text style={styles.btnText}>Publicar servicio</Text>
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
  },
  header: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1e3d59",
    marginBottom: 20,
  },
  card: {
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
  inputGroup: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f8f9fb",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#e0e6ed",
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 8,
    fontSize: 15,
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
