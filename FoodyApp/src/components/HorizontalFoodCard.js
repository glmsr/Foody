import React from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';
import { COLORS, FONTS, icons, SIZES } from '../constants';

const HorizontalFoodCard = ({ containerStyle, imageStyle, item, onPress }) => {
    return (
        <TouchableOpacity style={[styles.container, containerStyle]} onPress={onPress}>
            <Image source={{ uri: item.image }} style={ imageStyle } />
            <View style={{ flex: 1 }}>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <Text style={styles.price}>${item.price}</Text>
            </View>
            <View style={styles.caloriesContainer}>
                <Image source={icons.calories} style={styles.caloriesIcon} />
                <Text style={styles.caloriesText}>{item.calories} calories</Text>
            </View>
        </TouchableOpacity>
    )
}

export default HorizontalFoodCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.lightGray2,
  },
  title: {
    ...FONTS.h3,
    fontSize: 17
  },
  description: {
    color: COLORS.darkGray2,
    ...FONTS.body4
  },
  price: {
    marginTop: SIZES.base,
    ...FONTS.h2
  },
  caloriesContainer: {
    flexDirection: 'row',
    position: 'absolute',
    top: 5,
    right: SIZES.radius
  },
  caloriesIcon: {
    width: 30,
    height: 30,
  },
  caloriesText: {
    color: COLORS.darkGray2,
    ...FONTS.body5
  },
})
