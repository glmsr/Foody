import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';

import { COLORS, FONTS, icons, SIZES } from '../constants';




const HorizontalFoodCard = ({ containerStyle, imageStyle, item, onPress }) => {
    return (
        <TouchableOpacity
            style={{
                flexDirection: 'row',
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.lightGray2,
                ...containerStyle
            }}
        >
            {/* Image */}
            <Image
                source={item.image}
                style={ imageStyle }
            />

            {/* Info */}
            <View
                style={{
                    flex: 1
                }}
            >
                {/* Name */}
                <Text
                    style={{
                        ...FONTS.h3,
                        fontSize: 17
                    }}
                >
                    {item.name}
                </Text>

                {/* Description */}
                <Text
                    style={{
                        color: COLORS.darkGray2,
                        ...FONTS.body4
                    }}
                >
                    {item.description}
                </Text>

                {/* Price */}
                <Text
                    style={{
                        marginTop: SIZES.base,
                        ...FONTS.h2
                    }}
                >
                    ${item.price}
                </Text>
            </View>

            {/* Calories */}
            <View
                style={{
                    flexDirection: 'row',
                    position: 'absolute',
                    top: 5,
                    right: SIZES.radius
                }}
            >
                <Image
                    source={icons.calories}
                    style={{
                        width: 30,
                        height: 30,
                    }}
                />
                <Text
                    style={{
                        color: COLORS.darkGray2,
                        ...FONTS.body5
                    }}
                >
                    {item.calories} calories
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default HorizontalFoodCard;

// IF EVERYTHING FAILS, RUN THESE INSTEAD
// import React from 'react';
// import { View, Text } from 'react-native';
// const HorizontalFoodCard = () => {
//     return (
//         <View>
//             <Text>HorizontalFoodCard</Text>
//         </View>
//     )
// }
// export default HorizontalFoodCard
