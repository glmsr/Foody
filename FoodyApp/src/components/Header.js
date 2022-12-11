import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FONTS } from '../constants';

const Header = ({ containerStyle, title, titleStyle, leftComponent, rightComponent }) => {
    return (
        <View style={[ styles.container,containerStyle ]}>
            {leftComponent}
            <View style={styles.titleContainer}>
                <Text style={{ ...FONTS.h3, ...titleStyle }}>{title}</Text>
            </View>
            {rightComponent}
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
})
