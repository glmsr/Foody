import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { FONTS, SIZES } from "../constants";

const IconLabel = ({ containerStyle, icon, iconStyle, label, labelStyle }) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Image source={icon} style={[styles.icon, iconStyle]} />
      <Text style={[styles.label, labelStyle]}>{label}</Text>
    </View>
  );
};
export default IconLabel;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: SIZES.base,
    paddingHorizontal: SIZES.radius,
    borderRadius: SIZES.radius,
  },
  icon: {
    width: 20,
    height: 20,
  },
  label: {
    marginLeft: SIZES.base,
    ...FONTS.body3,
  },
});
