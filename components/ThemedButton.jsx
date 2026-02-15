import { StyleSheet, Text, View, Pressable } from "react-native";
import { Colors } from "../constants/Colors";

function ThemedButton({ style, ...props }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      {...props}
    />
  );
}

export default ThemedButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 5,
    marginVerical: 10,
  },
  pressed: {
    opacity: 0.5,
  },
});
