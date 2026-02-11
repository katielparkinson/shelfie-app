import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Slot, Stack } from "expo-router";

const RootLayout = () => {
  return (
    <View style={{ flex: 1 }}>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#ddd" },
          headerTintColor: "black",
        }}
      >
        <Stack.Screen name="index" options={{ title: "Home" }} />
        <Stack.Screen name="about" options={{ title: "About" }} />
        <Stack.Screen name="contact" options={{ title: "Contact" }} />
      </Stack>
    </View>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
