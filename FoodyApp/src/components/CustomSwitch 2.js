import React from 'react'
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import { COLORS, FONTS, SIZES } from '../constants'

const CustomSwitch = ({ value, onChange }) => {
    return (
        <TouchableWithoutFeedback onPress={() => onChange(!value)}>
            <View style={styles.container}>
                <View style={value ? styles.switchOnContainer : styles.switchOffContainer}>
                    <View style={[styles.dot, { backgroundColor: value ? COLORS.white : COLORS.gray }]} />
                </View>
                <Text style={[styles.text, { color: value ? COLORS.primary : COLORS.gray, ...FONTS.body4 }]}>Save Me</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default CustomSwitch

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    switchOnContainer: {
        width: 40,
        height: 20,
        paddingRight: 2,
        justifyContent: 'center',
        alignItems: 'flex-end',
        borderRadius: 20,
        backgroundColor: COLORS.primary
    },
    switchOffContainer: {
        width: 40,
        height: 20,
        paddingLeft: 2,
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: COLORS.gray
    },
    dot: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: COLORS.white
    },
    text: {
        marginLeft: SIZES.base,
        ...FONTS.body4
    }

})