import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONTS } from "../constants";

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: SIZES.padding,
  },
  sectionText: {
    ...FONTS.h3,
  },
  distanceContainer: {
    alignItems: "center",
  },
  deliveryTimeContainer: {
    marginTop: 40,
  },
  deliveryTimeContainer2: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  pricingRangeContainer: {
    alignItems: "center",
  },
  ratingsContainer: {
    marginTop: 40,
  },
  ratingsContainer2: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  modalContainer: {
    flex: 1,
    backgroundColor: COLORS.transparentBlack7,
  },
  transparentBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  modalView: {
    position: "absolute",
    left: 0,
    width: "100%",
    height: "100%",
    padding: SIZES.padding,
    borderTopRightRadius: SIZES.padding,
    borderTopLeftRadius: SIZES.padding,
    backgroundColor: COLORS.white,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerText: {
    flex: 1,
    ...FONTS.h3,
    fontSize: 18,
  },
  closeButton: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: COLORS.gray2,
  },
  closeButtonIcon: {
    tintColor: COLORS.gray2,
  },
  scrollContainer: {
    paddingBottom: 250,
  },
  applyButtonContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 110,
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.radius,
    backgroundColor: COLORS.white,
  },
  applyButton: {
    height: 50,
    borderRadius: SIZES.base,
    backgroundColor: COLORS.primary,
  },
});

export default styles;
