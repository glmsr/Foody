import React from 'react'
import { Image, StyleSheet, TouchableOpacity } from 'react-native'
import { COLORS } from '../constants'

const SocialButton = ({ containerStyle, icon, iconStyle, onPress }) => {
    return (
        <TouchableOpacity style={[styles.container, containerStyle]} onPress={onPress}>
            <Image source={icon} resizeMode="contain" style={[styles.image, iconStyle]} />
        </TouchableOpacity>
    )
}
export default SocialButton

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
    },
    image: {
        width: 20,
        height: 20,
        tintColor: COLORS.black,
    },
})