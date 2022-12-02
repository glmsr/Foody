import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from '../constants';

const styles = StyleSheet.create({
    authLayoutContainer: {
        flex: 1,
        paddingVertical: SIZES.padding,
        backgroundColor: COLORS.white,
    },
    appLogoContainer: {
        alignItems: 'center',
    },
    appLogo: {
        width: 200,
        height: 85,
    },
    titleContainer: {
        marginTop: SIZES.padding,
    },
    title: {
        ...FONTS.h2,
        color: COLORS.black,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    subtitle: {
        marginTop: SIZES.base,
        textAlign: 'center',
        ...FONTS.body3,
        color: COLORS.darkGray,
        marginHorizontal: SIZES.padding * 2
    },
    childContainer: {
        marginHorizontal: SIZES.margin
    },
});

export default styles;