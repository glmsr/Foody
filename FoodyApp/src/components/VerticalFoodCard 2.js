import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import { COLORS, FONTS, icons, SIZES } from '../constants';

const VerticalFoodCard = ({ containerStyle, item, onPress }) => {
    return (
        <TouchableOpacity
        style = {{
            width: 200,
            padding: SIZES.radius,
            alignItems: 'center',
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.lightGray2,
            ...containerStyle
        }}
        >
            {/* Calories and Favourite */}
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row'
                }}
            >
                <Image
                    source={icons.fire}
                    style={{
                        width: 30,
                        height: 30
                    }}
                />
                <Text
                    style={{
                        color: COLORS.darkGray2,
                        ...FONTS.body5
                    }}
                >
                    {item.calories} cal
                </Text>
            </View>

            {/* Favourite */}
            <Image
                source={icons.love}
                style={{
                    width: 20,
                    height: 20,
                    tintColor: item.isFavourite ? COLORS.primary : COLORS.gray
                }}
            />
            

            {/* Image */}

            {/* Info */}
        </TouchableOpacity>
    )
}

export default VerticalFoodCard; 

        


