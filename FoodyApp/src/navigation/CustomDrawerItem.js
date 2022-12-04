import React from 'react'
import { Text, TouchableOpacity, Image } from 'react-native'
import { COLORS } from '../constants'
import styles from '../styles/CustomDrawer.style'

const CustomDrawerItem = ({ label, icon, isFocused, onPress }) => {
    return (
        <TouchableOpacity style={[styles.customDrawerItemContainer, { backgroundColor: isFocused ? COLORS.transparentBlack1 : null }]} onPress={onPress}>
            <Image source={icon} style={styles.customDrawerItemIcon} />
            <Text style={styles.customDrawerItemLabel}>{label}</Text>
        </TouchableOpacity>
    )
}

export default CustomDrawerItem