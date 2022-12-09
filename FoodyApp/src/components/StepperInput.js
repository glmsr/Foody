import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { IconButton } from "../components";
import { COLORS, FONTS, icons, SIZES } from "../constants";

const StepperInput = ({ containerStyle, value = 1, onAdd, onMinus }) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <IconButton containerStyle={styles.button} icon={icons.minus} iconStyle={{ height: 25, width: 25, tintColor: value > 1 ? COLORS.primary : COLORS.gray }} onPress={onMinus} />
      <View style={styles.valueContainer}>
        <Text style={styles.valueText}>{value}</Text>
      </View>
      <IconButton containerStyle={styles.button} icon={icons.plus} iconStyle={styles.icon} onPress={onAdd} />
    </View>
  );

};
export default StepperInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 60,
    width: 130,
    backgroundColor: COLORS.lightGray2,
    borderRadius: SIZES.radius,
  },
  button: {
    width: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  valueContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  valueText: {
    ...FONTS.h2,
  },
  icon: {
    height: 25,
    width: 25,
    tintColor: COLORS.primary,
  },
});
