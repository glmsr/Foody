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
    detailsContainer: {
      marginTop: SIZES.radius,
      marginBottom: SIZES.padding,
      paddingHorizontal: SIZES.padding,
    },
    foodCardContainer: {
      height: 190,
      borderRadius: 15,
      backgroundColor: COLORS.lightGray2,
    },
    caloriesFavouriteContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: SIZES.base,
      paddingHorizontal: SIZES.radius,
    },
    caloriesContainer: {
      flexDirection: "row",
    },
    caloriesIcon: {
      width: 30,
      height: 30,
    },
    caloriesText: {
      color: COLORS.darkGray2,
      ...FONTS.body4,
    },
    foodImage: {
      height: 170,
      width: "100%",
    },
    descriptionContainer: {
      marginTop: SIZES.padding,
    },
    foodNameText: {
      ...FONTS.h1,
    },
    foodDescriptionText: {
      marginTop: SIZES.base,
      color: COLORS.darkGray,
      textAlign: "justify",
      ...FONTS.body3,
    },
    ratingDurationContainer: {
      flexDirection: "row",
      marginTop: SIZES.padding,
    },
    ratingContainer: {
      backgroundColor: COLORS.primary,
    },
    ratingLabel: {
      color: COLORS.white,
    },
    durationContainer: {
      marginLeft: SIZES.radius,
      paddingHorizontal: 0,
    },
    durationIcon: {
      tintColor: COLORS.black,
    },
    shippingContainer: {
      marginLeft: SIZES.radius,
      paddingHorizontal: 0,
    },
    shippingIcon: {
      tintColor: COLORS.black,
    },
    sizesContainer: {
      flexDirection: "row",
      marginTop: SIZES.padding,
      alignItems: "center",
    },
    sizesText: {
      ...FONTS.h3,
    },
    sizeButtonsContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      marginLeft: SIZES.padding,
    },
    sizeButtonContainer: {
      width: 55,
      height: 55,
      margin: SIZES.base,
      borderWidth: 1,
      borderRadius: SIZES.radius,
    },
    restaurantContainer: {
      flexDirection: "row",
      marginVertical: SIZES.padding,
      paddingHorizontal: SIZES.padding,
      alignItems: "center",
    },
    restaurantImage: {
      width: 50,
      height: 50,
      borderRadius: SIZES.radius,
    },
    infoContainer: {
      flex: 1,
      marginLeft: SIZES.radius,
      justifyContent: "center",
    },
    restaurantNameText: {
      ...FONTS.h2,
    },
    ratingIcon: {
      marginLeft: 3,
    },
    footerContainer: {
      flexDirection: "row",
      height: 120,
      alignItems: "center",
      paddingHorizontal: SIZES.padding,
      paddingBottom: SIZES.radius,
    },
    addToCartButton: {
      flex: 1,
      flexDirection: "row",
      height: 60,
      marginLeft: SIZES.radius,
      paddingHorizontal: SIZES.radius,
      borderRadius: SIZES.radius,
      backgroundColor: COLORS.primary,
    },

  })
;
export default styles;
