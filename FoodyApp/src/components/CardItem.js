import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { COLORS, FONTS, icons, SIZES } from "../constants";

const CardItem = ({ item, isSelected, onPress }) => {
  return (
    <TouchableOpacity style={[styles.container, { borderColor: isSelected ? COLORS.primary : COLORS.lightGray2 }]} onPress={onPress}>
      <View style={styles.cardImageContainer}>
        <Image source={item.icon} resizeMode="center" style={styles.cardImage} />
      </View>
      <Text style={styles.cardName}>{item.name}</Text>
      <Image source={isSelected ? icons.check_on : icons.check_off} style={styles.checkIcon} />
    </TouchableOpacity>
  );
};
export default CardItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 100,
    alignItems: "center",
    marginTop: SIZES.radius,
    paddingHorizontal: SIZES.padding,
    borderWidth: 2,
    borderRadius: SIZES.radius,
  },
  cardImageContainer: {
    width: 60,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderRadius: SIZES.radius,
    borderColor: COLORS.lightGray2,
  },
  cardImage: {
    width: 35,
    height: 35,
  },
  cardName: {
    flex: 1,
    marginLeft: SIZES.radius,
    ...FONTS.h3,
  },
  checkIcon: {
    width: 25,
    height: 25,
  },
});
