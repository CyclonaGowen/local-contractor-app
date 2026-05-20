import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ClaimBuild</Text>

      <Text style={styles.subtitle}>Contractor & Insurance Claim Platform</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Find Jobs</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Create Estimate</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Insurance Claims</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>My Projects</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 18,
    color: "#94a3b8",
    marginBottom: 40,
    textAlign: "center",
  },

  button: {
    width: "100%",
    backgroundColor: "#2563eb",
    padding: 18,
    borderRadius: 14,
    marginBottom: 15,
    alignItems: "center",
  },

  buttonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "600",
  },
});
