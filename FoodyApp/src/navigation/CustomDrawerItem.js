import React from 'react'
import { Text, TouchableOpacity, Image } from 'react-native'
import styles from '../styles/CustomDrawer.style'

const CustomDrawerItem = ({ label, icon, isFocused, onPress }) => {
    return (
        <TouchableOpacity style={styles.customDrawerItemContainer}>
            <Image source={icon} style={styles.customDrawerItemIcon} />
            <Text style={styles.customDrawerItemLabel}>{label}</Text>
        </TouchableOpacity>
    )
}

export default CustomDrawerItem