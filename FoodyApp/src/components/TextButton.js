import React from "react";
import { TouchableOpacity, Text, ActivityIndicator, StyleSheet } from "react-native";
import { FONTS, COLORS } from "../constants";

const TextButton = ({ buttonContainerStyle, label, loading, label2 = "", labelStyle, label2Style, onPress, disabled, }) => {
  return (
    loading ? (
      <TouchableOpacity style={[styles.container, buttonContainerStyle]} onPress={onPress} disabled={disabled}>
        <Text> <ActivityIndicator color="white" /> </Text>
      </TouchableOpacity>
    ) : (
      <TouchableOpacity style={[styles.buttonContainer, buttonContainerStyle]} onPress={onPress} disabled={disabled}>
        <Text style={[styles.label, labelStyle]}>{label}</Text>
        {label2 !== "" &&
          <Text style={[styles.label2, label2Style]}> ${label2}</Text>
        }
      </TouchableOpacity>
    )
  );
};
export default TextButton;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.primary,
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.primary,
  },
  label: {
    color: "white",
    ...FONTS.h3,
  },
  label2: {
    flex: 1,
    textAlign: "right",
    color: COLORS.white,
    ...FONTS.h3,
  },
});
