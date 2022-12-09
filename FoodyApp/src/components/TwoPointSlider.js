import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import { COLORS, FONTS, SIZES } from "../constants";

const TwoPointSlider = ({ values, min, max, prefix, postfix, onValuesChange }) => {
  return (
    <MultiSlider
      values={values}
      sliderLength={SIZES.width - (SIZES.padding * 2) - 20}
      min={min}
      max={max}
      step={1}
      markerOffsetY={20}
      selectedStyle={styles.selected}
      trackStyle={styles.track}
      minMarkerOverlapDistance={50}
      customMarker={(e) => {
        return (
          <View style={styles.marker}>
            <View style={[styles.markerLine, styles.shadow]} />
            <Text style={styles.markerText}>{prefix}{e.currentValue}{postfix}</Text>
          </View>
        );
      }}
      onValuesChange={(values) => onValuesChange(values)}
    />
  );
};
const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 1,
    shadowOpacity: 0.1,
  },
  selected: {
    backgroundColor: COLORS.primary,
  },
  track: {
    height: 10,
    borderRadius: 10,
    backgroundColor: COLORS.lightGray2,
  },
  marker: {
    height: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  markerLine: {
    height: 30,
    width: 30,
    borderRadius: 15,
    borderWidth: 4,
    borderColor: COLORS.white,
    backgroundColor: COLORS.primary,
  },
  markerText: {
    marginTop: 5,
    color: COLORS.darkGray,
    ...FONTS.body3,
  },

});

export default TwoPointSlider;
