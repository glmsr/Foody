import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator, StyleSheet } from "react-native";
import { FONTS, COLORS } from '../constants';

const TextButton = ({ buttonContainerStyle, label, label2 = '', labelStyle, label2Style, onPress, disabled }) => {
    return (
        <TouchableOpacity style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: COLORS.primary,
            ...buttonContainerStyle
        }} onPress={onPress} disabled={disabled}>
            <Text style={{
                color: 'white',
                ...FONTS.h3,
                ...labelStyle
            }} >
                {label}
            </Text>
            
            {label2 != '' &&
                <Text
                    style={{
                        flex: 1,
                        textAlign: 'right',
                        color: COLORS.white,
                        ...FONTS.h3,
                        ...label2Style
                    }}
                >
                    {label2}
                </Text>
            
            }

        </TouchableOpacity>
    );
}
export default TextButton;

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: COLORS.primary,
    },
    label: {
      color: 'white',
      ...FONTS.h3,
    },
});
