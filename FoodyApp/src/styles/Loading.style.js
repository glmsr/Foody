import {StyleSheet} from "react-native";
import {COLORS, FONTS, SIZES } from "../constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primary,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        ...FONTS.h3,
        color: COLORS.white,
    },
});
export default styles;
