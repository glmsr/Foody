import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,

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
  cartListContainer: {
    marginTop: SIZES.radius,
    paddingHorizontal: SIZES.padding,
    paddingBottom: SIZES.padding * 2,
  },
  cartItemContainer: {
    height: 100,
    backgroundColor: COLORS.lightGray2,
    flexDirection: "row",
    alignItems: "center",
    marginTop: SIZES.radius,
    paddingHorizontal: SIZES.radius,
    borderRadius: SIZES.radius,
  },
  foodImageContainer: {
    width: 90,
    height: 100,
    marginLeft: -10,
  },
  foodImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 10,
  },
  foodInfoContainer: {
    flex: 1,
  },
  foodName: {
    ...FONTS.body3,
  },
  foodPrice: {
    color: COLORS.primary,
    ...FONTS.h3,
  },
  quantityContainer: {
    height: 50,
    width: 125,
    backgroundColor: COLORS.white,
  },
  deleteButtonContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: COLORS.primary,
    flexDirection: "row",
    alignItems: "center",
    marginTop: SIZES.radius,
    paddingHorizontal: SIZES.radius,
    borderRadius: SIZES.radius,
  },
  deleteButtonIcon: {
    marginRight: 10,
  },

});

export default styles;
