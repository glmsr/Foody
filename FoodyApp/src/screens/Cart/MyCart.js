import React, { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import { icons } from "../../constants";
import { CartQuantityButton, Header, IconButton, FooterTotal, StepperInput } from "../../components";
import { SwipeListView } from "react-native-swipe-list-view";
import styles from "../../styles/MyCart.style";
import { useDispatch, useSelector } from "react-redux";

const MyCart = (props) => {

  const subTotal = useSelector(state => state.cartReducer.subTotal);
  const cart = useSelector(state => state.cartReducer.cart);
  const dispatch = useDispatch();

  function updateQuantityHandlerAdd(qty, id, price) {
    const itemTotal = qty * price;
    dispatch({ type: "UPDATE_CART", payload: { id, newQty: qty, newTotal: itemTotal } });
    dispatch({ type: "UPDATE_SUBTOTAL_SUB", payload: price });
  }

  function updateQuantityHandlerMinus(qty, id, price) {
    const itemTotal = qty * price;
    dispatch({ type: "UPDATE_CART", payload: { id, newQty: qty, newTotal: itemTotal } });
    dispatch({ type: "UPDATE_SUBTOTAL_MIN", payload: price });
  }

  function removeMyCartHandler(id) {
    cart.find((item) => {
      if (item.cartItem.id === id) {
        dispatch({ type: "UPDATE_SUBTOTAL_MIN", payload: item.total });
        dispatch({ type: "REMOVE_FROM_CART", payload: id });
      }
    });
  }


  function renderHeader() {
    return (
      <Header title="MY CART" containerStyle={styles.headerContainer}
              leftComponent={<IconButton icon={icons.back} containerStyle={styles.backButton}
                                         iconStyle={styles.backButtonIcon} onPress={() => props.navigation.goBack()} />}
              rightComponent={<CartQuantityButton />}
      />
    );
  }

  function renderCartList() {
    return (
      <SwipeListView
        data={cart}
        keyExtractor={item => `${item.id}`}
        contentContainerStyle={styles.cartListContainer}
        disableRightSwipe={true}
        rightOpenValue={-75}
        renderItem={(data) => (
          <View style={styles.cartItemContainer}>
            <View style={styles.foodImageContainer}>
              <Image source={{ uri: data?.item?.cartItem?.image }} resizeMode="contain" style={styles.foodImage} />
            </View>
            <View style={styles.foodInfoContainer}>
              <Text style={styles.foodName}>{data.item?.cartItem?.name}</Text>
              <Text style={styles.foodPrice}>${data.item?.cartItem?.price}</Text>
            </View>
            <StepperInput containerStyle={styles.quantityContainer}
                          value={data.item.qty}
                          onAdd={() => updateQuantityHandlerAdd(data.item.qty + 1, data.item.id, data.item.cartItem.price)}
                          onMinus={() => {if (data.item.qty > 1) {updateQuantityHandlerMinus(data.item.qty - 1, data.item.id, data.item.cartItem.price);}}}
            />
          </View>
        )}
        renderHiddenItem={(data) => (
          <IconButton
            containerStyle={styles.deleteButtonContainer}
            icon={icons.delete_icon}
            iconStyle={styles.deleteButtonIcon}
            onPress={() => removeMyCartHandler(data.item.id)}
          />
        )}
      />
    );
  }

  return (
    <View style={styles.container}>
      {renderHeader()}
      {renderCartList()}
      <FooterTotal
        subTotal={subTotal}
        shippingFee={0.00}
        total={subTotal}
        onPress={() => props.navigation.navigate("MyCard")}
      />
    </View>
  );
};
export default MyCart;
