import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: SIZES.padding,
    paddingBottom: 20
  },

  headerContainer: {
    height: 50,
    marginHorizontal: SIZES.padding,
    marginTop: 40,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: SIZES.radius,
    borderColor: COLORS.gray2,
  },
  backButtonIcon: {
    width: 20,
    height: 20,
    tintColor: COLORS.gray2,
  },
  rightHeaderContainer: {
    width: 40,
  },
  deliveryAddressContainer: {
    marginTop: SIZES.padding,
  },
  deliveryAddressTitle: {
    ...FONTS.h3,
  },
  deliveryAddressDescriptionContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: SIZES.radius,
    paddingVertical: SIZES.radius,
    paddingHorizontal: SIZES.padding,
    borderWidth: 2,
    borderRadius: SIZES.radius,
    borderColor: COLORS.lightGray2,
  },
  deliveryAddressIcon: {
    width: 40,
    height: 40,
    tintColor: COLORS.primary
  },
  deliveryAddressDescription: {
    marginLeft: SIZES.radius,
    width: "85%",
    ...FONTS.body3,
  },
  couponContainer: {
    marginTop: SIZES.padding,
  },
  couponTitle: {
    ...FONTS.h3,
  },
  couponInputContainer: {
    marginTop: 0,
    paddingLeft: SIZES.padding,
    paddingRight: 0,
    borderWidth: 2,
    borderColor: COLORS.lightGray2,
    backgroundColor: COLORS.white,
    overflow: 'hidden'
  },
  couponButtonContainer: {
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    borderRadius: SIZES.radius
  },
  couponButtonIcon: {
    width: 40,
    height: 40
  },

});

export default styles;
