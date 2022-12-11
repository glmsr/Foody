import { StyleSheet } from "react-native";
import { FONTS, SIZES, COLORS } from "../constants";

export default StyleSheet.create({
  dot_view: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  dot: {
    borderRadius: 5,
    marginHorizontal: 6,
    height: 10,
  },
  headerLogo_view: {
    position: "absolute",
    top: SIZES.height > 800 ? 50 : 25,
    left: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  logoImage: {
    width: SIZES.width * 0.5,
    height: 100,
  },
  renderFooter_view1: {
    height: 160,
  },
  renderFooter_view2: {
    flex: 3,
    justifyContent: "center",
  },
  buttons_view: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: SIZES.padding,
    marginVertical: SIZES.padding,
  },
  skipButton: {
    backgroundColor: null,
  },
  skipButtonLabel: {
    color: COLORS.darkGray2,
  },
  nextButton: {
    height: 60,
    width: 200,
    borderRadius: SIZES.radius,
  },
  buttonsContainer_view: {
    paddingHorizontal: SIZES.padding,
    marginVertical: SIZES.padding,
  },
  startButton: {
    height: 60,
    borderRadius: SIZES.radius,
  },
  renderHeaderLogo: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  renderHeaderLogo_view1: {
    width: SIZES.width,
  },
  renderHeaderLogo_view2: {
    flex: 3,
  },
  backgroundImage: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    width: "100%",
  },
  renderFooter_Image: {
    width: SIZES.width * .8,
    height: SIZES.width * 0.8,
    marginBottom: -SIZES.padding,
  },
  renderFooter_view3: {
    flex: 1,
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: SIZES.radius,
  },
  renderFooter_text1: {
    ...FONTS.h1,
    fontSize: 25,

  },
  renderFooter_text2: {
    marginTop: SIZES.radius,
    textAlign: "center",
    color: COLORS.darkGray,
    paddingHorizontal: SIZES.padding,
    ...FONTS.body3,
  },
});
