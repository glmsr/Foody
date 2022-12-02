import React from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'
import { FONTS, COLORS, SIZES } from '../constants'

const FormInput = ({ containerStyle, label, placeholder, inputStyle, preparedComponent, appendComponent, onChange, secureTextEntry, keyboardType = 'default', autoCompleteType = 'off', autoCapitalize = 'none', errorMsg = '' }) => {
    return (
        <View style={containerStyle}>
            <View style={styles.labelContainer}>
                <Text style={styles.label}>{label}</Text>
                <Text style={styles.errorMsg}>{errorMsg}</Text>
            </View>
            <View style={styles.inputContainer}>
                {preparedComponent}
                <TextInput
                    style={[styles.input, inputStyle]}
                    placeholder={placeholder}
                    placeholderTextColor={COLORS.gray}
                    secureTextEntry={secureTextEntry}
                    keyboardType={keyboardType}
                    autoCompleteType={autoCompleteType}
                    autoCapitalize={autoCapitalize}
                    onChangeText={(text) => onChange(text)}
                />
                {appendComponent}
            </View>
        </View>
    )
}
export default FormInput

const styles = StyleSheet.create({
    labelContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    label: {
        color: COLORS.gray,
        ...FONTS.body4
    },
    errorMsg: {
        color: COLORS.red,
        ...FONTS.body4
    },
    inputContainer: {
        flexDirection: 'row',
        height: 55,
        paddingHorizontal: SIZES.padding,
        marginTop: SIZES.base,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.lightGray2,
    },
    input: {
        flex: 1
    },

})