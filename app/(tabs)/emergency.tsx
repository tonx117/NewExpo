import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function Emergency() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡EMERGENCIA!</Text>
      <TouchableOpacity style={styles.emergencyButton}>
        <Text style={styles.buttonText}>¡EMERGENCIA!</Text>
      </TouchableOpacity>
      <View style={styles.divider} />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Denuncias"
          placeholderTextColor="#888"
          multiline={true}
          numberOfLines={4}
        />
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitText}>Enviar Denuncia</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "red",
  },
  emergencyButton: {
    backgroundColor: "red",
    padding: 15,
    borderRadius: 10,
    marginBottom: 50,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    width: "80%",
    marginBottom: 10,
  },
  inputContainer: {
    width: "80%",
    marginTop: 50,
  },
  input: {
    backgroundColor: "#f9f9f9",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  submitButton: {
    backgroundColor: "#0cb7f2", // Color celeste
    padding: 15,
    borderRadius: 10,
  },
  submitText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
});
