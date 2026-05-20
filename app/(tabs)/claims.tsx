import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function ClaimsScreen() {
  const [image, setImage] = useState<string | null>(null);
  const [customerName, setCustomerName] = useState("");
  const [address, setAddress] = useState("");
  const [insuranceCompany, setInsuranceCompany] = useState("");
  const [claimNumber, setClaimNumber] = useState("");
  const [damageType, setDamageType] = useState("");
  const [notes, setNotes] = useState("");

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Insurance Claims</Text>

      <View style={styles.card}>
        <Ionicons name="camera" size={40} color="#2563eb" />

        <Text style={styles.cardTitle}>Upload Damage Photos</Text>

        <Text style={styles.cardText}>
          Take photos of property damage for AI-assisted estimates.
        </Text>

        <TouchableOpacity style={styles.button} onPress={pickImage}>
          <Text style={styles.buttonText}>Upload Photos</Text>
        </TouchableOpacity>

        {image && <Image source={{ uri: image }} style={styles.image} />}

        <TextInput
          style={styles.input}
          placeholder="Customer Name"
          placeholderTextColor="#94a3b8"
          value={customerName}
          onChangeText={setCustomerName}
        />
        <TextInput
          style={styles.input}
          placeholder="Property Address"
          placeholderTextColor="#94a3b8"
          value={address}
          onChangeText={setAddress}
        />
        <TextInput
          style={styles.input}
          placeholder="Insurance Company"
          placeholderTextColor="#94a3b8"
          value={insuranceCompany}
          onChangeText={setInsuranceCompany}
        />
        <TextInput
          style={styles.input}
          placeholder="Claim Number"
          placeholderTextColor="#94a3b8"
          value={claimNumber}
          onChangeText={setClaimNumber}
        />
        <TextInput
          style={styles.input}
          placeholder="Damage Type"
          placeholderTextColor="#94a3b8"
          value={damageType}
          onChangeText={setDamageType}
        />
        <TextInput
          style={[styles.input, styles.notes]}
          placeholder="Notes"
          placeholderTextColor="#94a3b8"
          value={notes}
          onChangeText={setNotes}
          multiline
        />
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
    marginBottom: 20,
    marginTop: 50,
  },
  card: {
    backgroundColor: "#1e293b",
    borderRadius: 18,
    padding: 20,
    marginBottom: 30,
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
  image: {
    width: 250,
    height: 250,
    borderRadius: 16,
    marginTop: 20,
  },
  input: {
    width: "100%",
    backgroundColor: "#0f172a",
    color: "white",
    padding: 14,
    borderRadius: 12,
    marginTop: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#334155",
  },
  notes: {
    minHeight: 100,
    textAlignVertical: "top",
  },
});
