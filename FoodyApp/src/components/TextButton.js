import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator, StyleSheet } from "react-native";
import { FONTS, COLORS } from '../constants';

const TextButton = ({ buttonContainerStyle, label, labelStyle, loading, onPress, disabled }) => {
    return (
        <TouchableOpacity style={[styles.container, {buttonContainerStyle }]} onPress={onPress} disabled={disabled}>
            <Text style={[styles.label, {labelStyle}]} > { loading ? <ActivityIndicator color={COLORS.white} /> : label } </Text>
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
