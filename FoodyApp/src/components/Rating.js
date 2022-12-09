import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { icons, COLORS } from "../constants";

const Rating = ({ rating, iconStyle, activeColor = COLORS.orange, inactiveColor = COLORS.gray2 }) => {
  return (
    <View style={styles.container}>
      <Image source={icons.star}
             style={{ tintColor: rating >= 1 ? activeColor : inactiveColor, ...styles.rateIcon, ...iconStyle }} />
      <Image source={icons.star}
             style={{ tintColor: rating >= 2 ? activeColor : inactiveColor, ...styles.rateIcon, ...iconStyle }} />
      <Image source={icons.star}
             style={{ tintColor: rating >= 3 ? activeColor : inactiveColor, ...styles.rateIcon, ...iconStyle }} />
      <Image source={icons.star}
             style={{ tintColor: rating >= 4 ? activeColor : inactiveColor, ...styles.rateIcon, ...iconStyle }} />
      <Image source={icons.star}
             style={{ tintColor: rating >= 5 ? activeColor : inactiveColor, ...styles.rateIcon, ...iconStyle }} />
    </View>
  );
};
export default Rating;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  rateIcon: {
    height: 15,
    width: 15,
  },
});
