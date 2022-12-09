import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";
import { COLORS } from "../constants";

const IconButton = ({ containerStyle, icon, iconStyle, onPress }) => {
  return (
    <TouchableOpacity style={containerStyle} onPress={onPress}>
      <Image source={icon} style={[styles.icon, iconStyle]} />
    </TouchableOpacity>
  );
};
export default IconButton;

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
    tintColor: COLORS.white,
  },
});
