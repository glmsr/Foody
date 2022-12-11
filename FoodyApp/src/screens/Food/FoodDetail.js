import React, { useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { FONTS, COLORS, icons, images } from "../../constants";
import { Header, TextButton, IconButton, CartQuantityButton, IconLabel, LineDivider, Rating, StepperInput, } from "../../components";
import styles from "../../styles/FoodDetail.style";
import { useDispatch, useSelector } from "react-redux";

const FoodDetail = (props) => {

  const { item } = props.route.params;
  const cartItem = item;
  const id = item.id;
  const [selectedSize, setSelectedSize] = useState(0);
  const [qty, setQty] = useState(1);
  const total = cartItem?.price * qty;
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cartReducer.cart);

  const handleBuyNow = () => {
    if (cart.find((x) => x.cartItem.id === cartItem.id)) {
      const newQty = cart.find((x) => x.cartItem.id === cartItem.id).qty + qty;
      const newTotal = cart.find((x) => x.cartItem.id === cartItem.id).total + total;
      const id = cart.find(item => item.cartItem.id === cartItem.id).cartItem.id;
      dispatch({ type: "UPDATE_CART", payload: { id, newQty, newTotal } });
      dispatch({ type: "UPDATE_SUBTOTAL_SUB", payload: total });
    } else {
      dispatch({ type: "ADD_TO_CART", payload: { cartItem, id, qty, total } });
      dispatch({ type: "UPDATE_SUBTOTAL_SUB", payload: total });
    }
    props.navigation.navigate("MyCart");
  };

  function renderHeader() {
    return (
      <Header title="DETAILS" containerStyle={styles.headerContainer}
              leftComponent={<IconButton icon={icons.back} containerStyle={styles.backButton} iconStyle={styles.backButtonIcon} onPress={() => props.navigation.navigate("Home")} />}
              rightComponent={<CartQuantityButton onPress={() => props.navigation.navigate("MyCart")} />} />
    );
  }

  function renderDetails() {
    return (
      <View style={styles.detailsContainer}>
        <View style={styles.foodCardContainer}>
          <View style={styles.caloriesFavouriteContainer}>
            <View style={styles.caloriesContainer}>
              <Image source={icons.calories} style={styles.caloriesIcon} />
              <Text style={styles.caloriesText}>{cartItem?.calories} calories</Text>
            </View>
            <Image source={icons.love} style={{ width: 20, height: 20, tintColor: cartItem?.isFavourite ? COLORS.primary : COLORS.gray }} />
          </View>
          <Image source={{ uri: cartItem?.image }} resizeMode="contain" style={styles.foodImage} />
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.foodNameText}>{cartItem?.name}</Text>
          <Text style={styles.foodDescriptionText}>{cartItem?.description}</Text>
          <View style={styles.ratingDurationContainer}>
            <IconLabel containerStyle={styles.ratingContainer} icon={icons.star} label="4.5" labelStyle={styles.ratingLabel} />
            <IconLabel containerStyle={styles.durationContainer} icon={icons.clock} iconStyle={styles.durationIcon} label="30Mins." />
            <IconLabel containerStyle={styles.shippingContainer} icon={icons.dollar} iconStyle={styles.shippingIcon} label="Free Shipping" />
          </View>
          <View style={styles.sizesContainer}>
            <Text style={styles.sizesText}>Sizes:</Text>
            <View style={styles.sizeButtonsContainer}>
              {cartItem?.sizes.map((sizeItem, index) => {
                return (
                  <TextButton key={`Sizes-${index}`} buttonContainerStyle={[styles.sizeButtonContainer, { borderColor: selectedSize === sizeItem.id ? COLORS.primary : COLORS.gray2, backgroundColor: selectedSize === sizeItem.id ? COLORS.primary : null, }]} label={sizeItem.label} labelStyle={{ color: selectedSize === sizeItem.id ? COLORS.white : COLORS.gray2, ...FONTS.body2 }} onPress={() => setSelectedSize(sizeItem.id)} />
                );
              })}
            </View>
          </View>
        </View>
      </View>
    );
  }

  function renderRestaurant() {
    return (
      <View style={styles.restaurantContainer}>
        <Image source={images.profile} style={styles.restaurantImage} />
        <View style={styles.infoContainer}>
          <Text style={styles.restaurantNameText}>FoodyApp user</Text>
          <Text>1.2 km away from you</Text>
        </View>
        <Rating rating={4} iconStyle={styles.ratingIcon}></Rating>
      </View>
    );
  }

  function renderFooter() {
    return (
      <View style={styles.footerContainer}>
        <StepperInput value={qty} onAdd={() => setQty(qty + 1)} onMinus={() => {if (qty > 1) setQty(qty - 1);}} />
        <TextButton buttonContainerStyle={styles.addToCartButton} label="Buy Now" label2={total} onPress={handleBuyNow} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {renderHeader()}
      <ScrollView>
        {renderDetails()}
        <LineDivider />
        {renderRestaurant()}
        <LineDivider />
      </ScrollView>
      {renderFooter()}
    </View>
  );
};

export default FoodDetail;
