import React from "react";
import { Platform, Text, View, StyleSheet } from "react-native";
import { LineDivider, TextButton } from "../components";
import { COLORS, FONTS, SIZES } from "../constants";
import { useSelector } from "react-redux";
import LinearGradient from "react-native-linear-gradient";

const FooterTotal = ({ subTotal, shippingFee, total, onPress }) => {
const cart = useSelector((state) => state.cartReducer.cart.length);
  return (
    <View>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={[COLORS.transparent, COLORS.lightGray1]}
        style={styles.container}
      />
      <View style={styles.orderDetailsContainer}>
        <View style={styles.subTotalContainer}>
          <Text style={styles.subTotalLabel}>Subtotal</Text>
          <Text style={styles.subTotalValue}>${subTotal.toFixed(2)}</Text>
        </View>
        <View style={styles.shippingFeeContainer}>
          <Text style={styles.shippingFeeLabel}>Shipping Fee</Text>
          <Text style={styles.shippingFeeValue}>${shippingFee.toFixed(2)}</Text>
        </View>
        <LineDivider />
        <View style={styles.totalContainer}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalValue}>${total.toFixed(2)}</Text>
        </View>
        <TextButton disabled={cart === 0} buttonContainerStyle={styles.checkoutButton} label="Place your Order" onPress={onPress} />
      </View>
    </View>
  );
};

export default FooterTotal;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: -15,
    left: 0,
    right: 0,
    height: Platform.OS === "ios" ? 200 : 50,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  orderDetailsContainer: {
    padding: SIZES.padding,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: COLORS.white,
  },
  subTotalContainer: {
    flexDirection: "row",
  },
  subTotalLabel: {
    flex: 1,
    ...FONTS.body3,
  },
  subTotalValue: {
    ...FONTS.h3,
  },
  shippingFeeContainer: {
    flexDirection: "row",
    marginTop: SIZES.base,
    marginBottom: SIZES.padding,
  },
  shippingFeeLabel: {
    flex: 1,
    ...FONTS.body3,
  },
  shippingFeeValue: {
    ...FONTS.h3,
  },
  totalContainer: {
    flexDirection: "row",
    marginTop: SIZES.padding,
  },
  totalLabel: {
    flex: 1,
    ...FONTS.h2,
  },
  totalValue: {
    ...FONTS.h2,
  },
  checkoutButton: {
    height: 60,
    marginTop: SIZES.padding,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.primary,
  },
});

