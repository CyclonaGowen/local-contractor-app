import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ClaimsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Insurance Claims</Text>

      <View style={styles.card}>
        <Ionicons name="camera" size={40} color="#2563eb" />

        <Text style={styles.cardTitle}>Upload Damage Photos</Text>

        <Text style={styles.cardText}>
          Take photos of property damage for AI-assisted estimates.
        </Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Upload Photos</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Ionicons name="document-text" size={40} color="#2563eb" />

        <Text style={styles.cardTitle}>Generate Claim Report</Text>

        <Text style={styles.cardText}>
          Create insurance-ready documentation and repair estimates.
        </Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Create Report</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
    padding: 20,
  },

  title: {
    fontSize: 34,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
    marginTop: 50,
  },

  card: {
    backgroundColor: "#1e293b",
    borderRadius: 18,
    padding: 20,
    marginBottom: 20,
    alignItems: "center",
  },

  cardTitle: {
    color: "white",
    fontSize: 22,
    fontWeight: "600",
    marginTop: 15,
    marginBottom: 10,
  },

  cardText: {
    color: "#94a3b8",
    textAlign: "center",
    marginBottom: 20,
    fontSize: 16,
  },

  button: {
    backgroundColor: "#2563eb",
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
  },

  buttonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
  },
});
