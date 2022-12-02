import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { FONTS, COLORS } from '../constants';

const TextButton = ({ buttonContainerStyle, label, labelStyle, onPress, disabled }) => {
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

        </TouchableOpacity>
    );
}
export default TextButton;
