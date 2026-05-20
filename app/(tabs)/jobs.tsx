import { StyleSheet, Text, View } from "react-native";

export default function JobsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Local Jobs</Text>

      <View style={styles.card}>
        <Text style={styles.jobTitle}>Fence Repair</Text>
        <Text style={styles.location}>McAlester, OK</Text>
        <Text style={styles.price}>Budget: $1,200</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.jobTitle}>Roof Leak Inspection</Text>
        <Text style={styles.location}>Eufaula, OK</Text>
        <Text style={styles.price}>Insurance Claim</Text>
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
    padding: 20,
    borderRadius: 16,
    marginBottom: 15,
  },

  jobTitle: {
    color: "white",
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 5,
  },

  location: {
    color: "#94a3b8",
    fontSize: 16,
    marginBottom: 5,
  },

  price: {
    color: "#22c55e",
    fontSize: 18,
    fontWeight: "bold",
  },
});
