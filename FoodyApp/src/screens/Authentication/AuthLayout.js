import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import { images } from '../../constants'
import styles from '../../styles/Auth.style'

const AuthLayout = ({ title, subtitle, titleContainerStyle, children }) => {
    return (
        <ScrollView style={styles.authLayoutContainer}>
            <View style={styles.appLogoContainer}>
                <Image source={images.logo_02} resizeMode="contain" style={styles.appLogo} />
            </View>
            <View style={[titleContainerStyle, styles.titleContainer]}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
            <View style={styles.childContainer}>
                {children}
            </View>
        </ScrollView>
    )
}

export default AuthLayout