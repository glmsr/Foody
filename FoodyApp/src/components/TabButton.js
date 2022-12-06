import React from "react";
import { Image, Text, TouchableWithoutFeedback, StyleSheet } from "react-native";
import Animated from "react-native-reanimated";
import { COLORS, FONTS, SIZES } from "../constants";

const TabButton = ({ label, icon, isFocused, outerContainerStyle, innerContainerStyle, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Animated.View style={[styles.tabMainContainer, outerContainerStyle]}>
        <Animated.View style={[styles.tabContainer , innerContainerStyle]}>
          <Image source={icon} style={{ width: 20, height: 20, tintColor: isFocused ? COLORS.white : COLORS.gray2 }} />
          {isFocused && <Text numberOfLines={1} style={styles.tabText}>{label}</Text>}
        </Animated.View>
      </Animated.View>
    </TouchableWithoutFeedback>
  )
}
export default TabButton

const styles = StyleSheet.create({
  tabMainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabContainer: {
    flexDirection: 'row',
    width: '80%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
  tabText: {
    color: COLORS.white,
    marginLeft: SIZES.base,
    ...FONTS.h3,
  },
})
