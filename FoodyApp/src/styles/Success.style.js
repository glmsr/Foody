import { StyleSheet } from "react-native";
import { FONTS, SIZES, COLORS } from "../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SIZES.padding,
    backgroundColor: COLORS.white,
  },
  successContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 150,
    height: 150,
  },
  title: {
    ...FONTS.h1,
    marginTop: SIZES.padding,
  },
  description: {
    ...FONTS.body3,
    marginTop: SIZES.base,
    textAlign: "center",
    color: COLORS.darkGray,
  },
  button: {
    height: 55,
    marginBottom: SIZES.padding,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.primary,
  },

});
export default styles;
