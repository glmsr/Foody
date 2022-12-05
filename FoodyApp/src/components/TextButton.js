import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator } from "react-native";
import { FONTS, COLORS } from '../constants';

const TextButton = ({ buttonContainerStyle, label, labelStyle, loading, onPress, disabled }) => {
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
              { loading ? <ActivityIndicator color={COLORS.white} /> : label }
            </Text>

        </TouchableOpacity>
    );
}
export default TextButton;
