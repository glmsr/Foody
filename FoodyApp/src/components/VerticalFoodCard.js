import React from "react";
import { TouchableOpacity, View, Text, Image, StyleSheet } from "react-native";
import { COLORS, FONTS, icons, SIZES } from "../constants";

const VerticalFoodCard = ({ containerStyle, item, onPress, onPressFav }) => {
  return (
    <TouchableOpacity style={[styles.container, containerStyle]} onPress={onPress}>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Image source={icons.calories} style={styles.caloriesIcon} />
          <Text style={styles.caloriesText}>{item.calories} calories</Text>
        </View>
        <TouchableOpacity onPress={onPressFav}>
          <Image source={icons.love}
                 style={{ width: 20, height: 20, tintColor: item.isFavourite ? COLORS.primary : COLORS.gray }} />
        </TouchableOpacity>
      </View>
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.image }} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={{ ...FONTS.h3 }}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.price}>${item.price}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default VerticalFoodCard;

const styles = StyleSheet.create({
  container: {
    width: 200,
    padding: SIZES.radius,
    alignItems: "center",
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.lightGray2,
  },
  caloriesIcon: {
    width: 30,
    height: 30,
  },
  caloriesText: {
    color: COLORS.darkGray2,
    ...FONTS.body5,
  },
  imageContainer: {
    height: 150,
    width: 150,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  textContainer: {
    alignItems: "center",
    marginTop: -20,
  },
  description: {
    color: COLORS.darkGray2,
    textAlign: "center",
    ...FONTS.body5,
  },
  price: {
    marginTop: SIZES.radius,
    ...FONTS.h2,
  },


});


