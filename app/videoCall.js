// app/videoCall.js
import { useLocalSearchParams } from "expo-router";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { WebView } from "react-native-webview";

export default function VideoCallScreen() {
  const { room } = useLocalSearchParams(); // ← obtiene /videoCall?room=xxxx

  // Si no viene sala, generamos una por seguridad
  const salaSegura = room || `sala_${Date.now()}`;

  const jitsiURL = `https://meet.jit.si/${salaSegura}`;

  return (
    <View style={{ flex: 1, backgroundColor: "#000" }}>
      <WebView
        source={{ uri: jitsiURL }}
        style={{ flex: 1 }}
        startInLoadingState={true}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        renderLoading={() => (
          <View style={styles.loaderContainer}>
            <ActivityIndicator size="large" color="#fff" />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
});
