import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white
  },
  scrollContainer: {
    flexGrow: 1,
    marginTop: SIZES.radius,
    paddingHorizontal: SIZES.padding,
    paddingBottom: SIZES.radius
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
  addNewCardContainer: {
    marginTop: SIZES.padding
  },
  addNewCardText: {
    ...FONTS.h3
  },
  addNewCardItemContainer: {
    marginTop: SIZES.radius
  },
footerContainer: {
  paddingTop: SIZES.radius,
  paddingBottom: SIZES.padding,
  paddingHorizontal: SIZES.padding
},


});
export default styles;
