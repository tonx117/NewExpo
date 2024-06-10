import React from "react";
import { View, ScrollView, Image } from "react-native";
import { Button, Text } from "react-native-elements";

export default function Home() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#f0f8ff" }}>
      <View style={{ alignItems: "center", marginTop: 20 }}>
        <Image
          source={require("../../assets/images/logo.jpg")}
          style={{ width: 300, height: 300, borderRadius: 10 }}
        />
      </View>
      <View style={{ marginHorizontal: 20, marginTop: 20 }}>
        <Text h4 style={{ marginBottom: 10 }}>
          Información de seguridad e higiene
        </Text>
        <Text style={{ marginBottom: 20 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut
          velit ac ligula euismod bibendum. Fusce feugiat arcu sed ex
          ullamcorper, sed ultrices enim faucibus. Nulla facilisi. Integer
          ullamcorper, urna nec vestibulum eleifend, nisl libero vestibulum
          nibh, non scelerisque mi sapien quis metus.
        </Text>
        <Button
          title="Más información"
          buttonStyle={{ backgroundColor: "#0cb7f2", borderRadius: 10 }}
          onPress={() => alert("Botón presionado")}
        />
      </View>
      <View style={{ marginHorizontal: 20, marginTop: 20 }}>
        <Text h4 style={{ marginBottom: 10 }}>
          Herramientas útiles
        </Text>
        <Text style={{ marginBottom: 20 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut
          velit ac ligula euismod bibendum. Fusce feugiat arcu sed ex
          ullamcorper, sed ultrices enim faucibus. Nulla facilisi. Integer
          ullamcorper, urna nec vestibulum eleifend, nisl libero vestibulum
          nibh, non scelerisque mi sapien quis metus.
        </Text>
        <Button
          title="Explorar"
          buttonStyle={{ backgroundColor: "#0cb7f2", borderRadius: 10 }}
          onPress={() => alert("Botón presionado")}
        />
      </View>
    </ScrollView>
  );
}
