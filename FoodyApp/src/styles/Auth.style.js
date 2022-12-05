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
    signInContainer: {
        flex: 1,
        marginTop: SIZES.padding,
    },
    signUpContainer: {
        flex: 1,
        marginTop: SIZES.padding,
    },
    forgotPasswordContainer: {
        flex: 1,
        marginTop: SIZES.padding,
    },
    formInputContainer: {
        marginTop: SIZES.radius,
    },
    appendComponentMailContainer: {
        justifyContent: 'center',
    },
    appendComponentMailIcon: {
        width: 20,
        height: 20,
    },
    appendComponentPassContainer: {
        width: 40,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    appendComponentPassIcon: {
        width: 20,
        height: 20,
        tintColor: COLORS.gray
    },
    saveMeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: SIZES.radius,
    },
    forgotPassButtonContainer: {
        backgroundColor: null,
    },
    forgotPassLabel: {
        color: COLORS.gray,
        ...FONTS.body4,
    },
    signInButtonContainer: {
        height: 55,
        alignItems: 'center',
        marginTop: SIZES.padding,
        borderRadius: SIZES.radius,
    },
    signInButtonLabel: {
        ...FONTS.h3,
    },
    redirectContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: SIZES.radius
    },
    redirectText: {
        color: COLORS.darkGray,
        ...FONTS.body3
    },
    redirectButtonContainer: {
        backgroundColor: null,
    },
    redirectButtonLabel: {
        color: COLORS.primary,
        ...FONTS.h3,
    },
    socialButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: SIZES.padding * 2,
    },
    fbButtonContainer: {
        height: 50,
        alignItems: 'center',
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.blue,
        marginHorizontal: SIZES.base,
    },
    fbIconStyle: {
        tintColor: COLORS.white,
    },
    googleButtonContainer: {
        height: 50,
        alignItems: 'center',
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.lightGray2,
        marginHorizontal: SIZES.base
    },
    googleIconStyle: {
        tintColor: null
    },


});

export default styles;
