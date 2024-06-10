import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function LoginScreen() {
  const router = useRouter();

  const onPress = () => {
    router.push("/signin");
  };

  return (
    <View>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/logo.jpg")}
          style={styles.logo}
        />
      </View>
      <View style={styles.subContainer}>
        <Text style={[styles.title, styles.textWithBorder]}>
          ¡Bienvenido a Centinela!
        </Text>
        <Text style={[styles.subtitle, styles.textWithBorder]}>
          Somos tu aliado en seguridad industrial, una plataforma diseñada para
          brindarte información precisa y herramientas efectivas para proteger
          tus entornos de trabajo.
        </Text>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btn} onPress={onPress}>
          <Text style={[styles.btnText, styles.textWithBorder]}>
            ¡Comencemos!
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: 70,
  },
  logo: {
    width: 300,
    height: 400,
    borderRadius: 20,
  },
  subContainer: {
    padding: 20,
    display: "flex",
    alignItems: "center",
    backgroundColor: "rgba(128, 157, 163, 0.9)",
    borderRadius: 10,
    marginHorizontal: 10,
    marginTop: 10,
  },
  title: {
    fontSize: 29,
    fontFamily: "Poppins",
    color: "#f0f8ff",
  },
  subtitle: {
    fontSize: 19,
    fontFamily: "Poppins",
    textAlign: "center",
    color: "#f0f8ff",
  },
  btnContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: 10,
  },
  btn: {
    backgroundColor: "#0cb7f2",
    width: 300,
    height: 50,
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    fontFamily: "Poppins",
    textAlign: "center",
    color: "#f0f8ff",
    fontSize: 20,
  },
  textWithBorder: {
    // Aquí puedes definir los estilos para el borde de texto
    textShadowColor: "black",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
});
