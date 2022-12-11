import React from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'
import { FONTS, COLORS, SIZES } from '../constants'

const FormInput2 = ({ containerStyle, inputContainerStyle, label, placeholder, value='', inputStyle, preparedComponent, appendComponent, onChange, secureTextEntry, keyboardType = 'default', autoCompleteType = 'off', autoCapitalize = 'none', errorMsg = '', maxLength }) => {
    return (
        <View style={{...containerStyle}}>
            <View style={styles.labelContainer}>
                <Text style={styles.label}>{label}</Text>
                <Text style={styles.errorMsg}>{errorMsg}</Text>
            </View>
            <View style={{
                flexDirection: 'row',
                height: SIZES.height > 800 ? 55 : 45,
                paddingHorizontal: SIZES.padding,
                marginTop: SIZES.height > 800 ? SIZES.base : 0,
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.lightGray2,
                ...inputContainerStyle
            }}>
                {preparedComponent}
               <TextInput style={{
                    flex: 1, 
                    ...inputStyle
               }}
                    placeholder={placeholder}
                    placeholderTextColor={COLORS.gray}
                    secureTextEntry={secureTextEntry}
                    keyboardType={keyboardType}
                    autoCompleteType={autoCompleteType}
                    autoCapitalize={autoCapitalize}
                    value={value}
                    maxLength={maxLength}
                    onChangeText={(text) => onChange(text)}
                />
                {appendComponent}
            </View>
        </View>
    )
}
export default FormInput2;

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
    
    input: {
        flex: 1
    },

})
