import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES, icons } from "../constants";
import { useSelector } from "react-redux";

const CartQuantityButton = ({ containerStyle, iconStyle, onPress }) => {
  const quantity = useSelector((state) => state.cartReducer.cart.length);
  return (
    <TouchableOpacity style={[styles.container, containerStyle]} onPress={onPress}>
      <Image source={icons.cart} style={[styles.icon, iconStyle]} />
      <View style={styles.quantityContainer}>
        <Text style={styles.quantity}>{quantity}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default CartQuantityButton;

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.lightOrange2,
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: COLORS.black,
  },
  quantityContainer: {
    position: "absolute",
    top: 5,
    right: 5,
    height: 15,
    width: 15,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.primary,
  },
  quantity: {
    color: COLORS.white,
    ...FONTS.body5,
    lineHeight: 15,
    fontSize: 10,
  },
});
