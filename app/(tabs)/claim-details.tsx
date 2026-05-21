import { useLocalSearchParams } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function ClaimDetailsScreen() {
  const {
    customerName,
    address,
    insuranceCompany,
    claimNumber,
    damageType,
    notes,
    status,
  } = useLocalSearchParams();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Claim Details</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Customer</Text>
        <Text style={styles.value}>{customerName}</Text>

        <Text style={styles.label}>Address</Text>
        <Text style={styles.value}>{address}</Text>

        <Text style={styles.label}>Insurance Company</Text>
        <Text style={styles.value}>{insuranceCompany}</Text>

        <Text style={styles.label}>Claim Number</Text>
        <Text style={styles.value}>{claimNumber}</Text>

        <Text style={styles.label}>Damage Type</Text>
        <Text style={styles.value}>{damageType}</Text>

        <Text style={styles.label}>Status</Text>

        <View style={styles.statusBadge}>
          <Text style={styles.statusText}>{status}</Text>
        </View>

        <Text style={styles.label}>Notes</Text>
        <Text style={styles.value}>{notes}</Text>
      </View>
    </ScrollView>
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
    marginTop: 50,
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#1e293b",
    borderRadius: 18,
    padding: 20,
    marginBottom: 30,
  },

  label: {
    color: "#94a3b8",
    fontSize: 14,
    marginTop: 18,
    marginBottom: 6,
    textTransform: "uppercase",
  },

  value: {
    color: "white",
    fontSize: 18,
    fontWeight: "500",
  },

  statusBadge: {
    backgroundColor: "#facc15",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    alignSelf: "flex-start",
    marginTop: 10,
  },

  statusText: {
    color: "#000000",
    fontWeight: "bold",
  },
});
