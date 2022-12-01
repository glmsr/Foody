import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primary,
    },
    drawerStyles: {
        flex: 1,
        width: '65%',
        paddingRight: 20,
        backgroundColor: 'transparent',
    },
    sceneContainerStyle: {
        backgroundColor: 'transparent',
    },
    drawerContent: {
        flex: 1,
        backgroundColor: COLORS.primary,
    },
    drawerContentView1: {
        flex: 1,
        paddingHorizontal: SIZES.radius,
    },
    drawerContentView2: {
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    drawerCrossButton: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    crossIcon: {
        height: 35,
        width: 35,
        tintColor: COLORS.white,
    },
    profileButton: {
        flexDirection: 'row',
        marginTop: SIZES.radius,
        alignItems: 'center',
    },
    profileIcon: {
        height: 50,
        width: 50,
        borderRadius: SIZES.radius,
        tintColor: COLORS.white,
    },
    profileView: {
        marginLeft: SIZES.radius,
    },
    profileText: {
        color: COLORS.white,
        ...FONTS.h3,
    },
    profileLink: {
        color: COLORS.lightGray,
        ...FONTS.body4,
    },
    drawerItemsContainer: {
        flex: 1,
        marginTop: SIZES.padding,
    },
    customDrawerItemContainer: {
        flexDirection: 'row',
        height: 40,
        alignItems: 'center',
        marginBottom: SIZES.base,
        paddingLeft: SIZES.radius,
        borderRadius: SIZES.radius,
        // backgroundColor: COLORS.transparentBlack1,
    },
    customDrawerItemIcon: {
        height: 20,
        width: 20,
        tintColor: COLORS.white,
    },
    customDrawerItemLabel: {
        marginLeft: 15,
        color: COLORS.white,
        ...FONTS.h3,
    },
    divider: {
        height: 1,
        marginVertical: SIZES.radius,
        marginLeft: SIZES.radius,
        backgroundColor: COLORS.lightGray1,
    },
    bottomDrawerItemsContainer: {
        marginBottom: SIZES.padding,
    },
});

export default styles;