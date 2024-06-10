import { Tabs } from "expo-router";
import { Ionicons, AntDesign, FontAwesome6 } from "@expo/vector-icons";
import React from "react";

const _layout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="emergency"
        options={{
          tabBarLabel: "Emergency",
          tabBarIcon: ({ color }) => (
            <AntDesign name="exclamationcircleo" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="todo"
        options={{
          tabBarLabel: "ToDo",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="list-alt" size={24} color="black" />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
