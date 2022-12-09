import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { COLORS, FONTS } from "../constants";

const TextIconButton = ({ containerStyle, label, labelStyle, icon, iconPosition, iconStyle, onPress }) => {
  return (
    <TouchableOpacity style={[styles.container, containerStyle]} onPress={onPress}>
      {iconPosition === "LEFT" && <Image source={icon} resizeMode="contain" style={[styles.image, iconStyle]} />}
      <Text style={[labelStyle, FONTS.body3]}>{label}</Text>
      {iconPosition === "RIGHT" && <Image source={icon} resizeMode="contain" style={[styles.image, iconStyle]} />}
    </TouchableOpacity>
  );
};
export default TextIconButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    marginLeft: 5,
    width: 20,
    height: 20,
    tintColor: COLORS.black,
  },
});
