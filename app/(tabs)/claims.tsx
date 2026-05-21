import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { router } from "expo-router";
import { useState } from "react";

import {
    Image,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
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

  const [savedClaims, setSavedClaims] = useState<any[]>([]);

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

  const generateSummary = () => {
    const newClaim = {
      status: "New",
      customerName,
      address,
      insuranceCompany,
      claimNumber,
      damageType,
      notes,
      image,
    };

    setSavedClaims((prevClaims) => [...prevClaims, newClaim]);

    setCustomerName("");
    setAddress("");
    setInsuranceCompany("");
    setClaimNumber("");
    setDamageType("");
    setNotes("");
    setImage(null);

    Keyboard.dismiss();
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          style={styles.container}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ paddingBottom: 120 }}
        >
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

            <TouchableOpacity
              style={styles.summaryButton}
              onPress={generateSummary}
            >
              <Text style={styles.buttonText}>Generate Claim Summary</Text>
            </TouchableOpacity>

            {savedClaims.length > 0 && (
              <View style={{ width: "100%", marginTop: 30 }}>
                <Text style={styles.summaryTitle}>Saved Claims</Text>

                {savedClaims.map((claim, index) => (
                  <TouchableOpacity
                    key={index}
                    style={styles.savedClaimCard}
                    onPress={() =>
                      router.push({
                        pathname: "/claim-details",
                        params: {
                          customerName: claim.customerName,
                          address: claim.address,
                          insuranceCompany: claim.insuranceCompany,
                          claimNumber: claim.claimNumber,
                          damageType: claim.damageType,
                          notes: claim.notes,
                          status: claim.status,
                        },
                      } as any)
                    }
                  >
                    <Text style={styles.savedClaimName}>
                      {claim.customerName || "Unnamed Claim"}
                    </Text>

                    <Text style={styles.savedClaimDetail}>
                      {claim.damageType || "No damage type entered"}
                    </Text>

                    <Text style={styles.savedClaimDetail}>
                      Claim #: {claim.claimNumber || "N/A"}
                    </Text>

                    <View style={styles.statusBadge}>
                      <Text style={styles.statusText}>{claim.status}</Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
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

  cardTitle: {
    color: "white",
    fontSize: 22,
    fontWeight: "600",
    marginTop: 15,
    marginBottom: 10,
  },

  cardText: {
    color: "#94a3b8",
    marginBottom: 20,
    fontSize: 16,
  },

  button: {
    backgroundColor: "#2563eb",
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: "center",
  },

  summaryButton: {
    width: "100%",
    backgroundColor: "#22c55e",
    padding: 16,
    borderRadius: 12,
    marginTop: 18,
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
  },

  image: {
    width: "100%",
    height: 250,
    borderRadius: 16,
    marginTop: 20,
    marginBottom: 20,
  },

  input: {
    width: "100%",
    backgroundColor: "#ffffff",
    color: "#0f172a",
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

  summaryTitle: {
    color: "#ffffff",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 12,
  },

  savedClaimCard: {
    backgroundColor: "#0f172a",
    padding: 16,
    borderRadius: 14,
    marginTop: 12,
    borderWidth: 1,
    borderColor: "#334155",
  },

  savedClaimName: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 6,
  },

  savedClaimDetail: {
    color: "#cbd5e1",
    fontSize: 16,
    marginBottom: 4,
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
