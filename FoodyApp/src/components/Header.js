import React from 'react';
import { View, Text } from 'react-native';
import { FONTS } from '../constants';

const Header = ({ containerStyle, title, titleStyle, leftComponent, rightComponent }) => {
    return (
        <View
            style={{
                height:60,
                flexDirection: 'row',
                ...containerStyle
            }}
        >
            {/* Left */}
            {leftComponent}
            {/* Title */}
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Text style={{ ...FONTS.h3, ...titleStyle }}>{title}</Text>
            </View>

            {/* Right */}
            {rightComponent}
        </View>
    )
}

export default Header;