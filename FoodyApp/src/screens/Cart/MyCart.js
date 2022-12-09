import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { icons, dummyData } from "../../constants";
import { CartQuantityButton, Header, IconButton, FooterTotal, StepperInput } from "../../components";
import { SwipeListView } from "react-native-swipe-list-view";
import styles from "../../styles/MyCart.style";

const MyCart = ({ navigation }) => {

  const [myCartList, setMyCartList] = useState(dummyData.myCart);

  //Handler

  function updateQuantityHandler(newQty, id) {
    const newCartList = myCartList.map(item => (
      item.id === id ? { ...item, qty: newQty } : item
    ));
    setMyCartList(newCartList);
  }

  function removeMyCartHandler(id) {
    let newCartList = [...myCartList];
    const index = newCartList.findIndex(cart => cart.id === id);
    newCartList.splice(index, 1);
    setMyCartList(newCartList);
  }

  //Render

  function renderHeader() {
    return (
      <Header title="MY CART" containerStyle={styles.headerContainer}
              leftComponent={<IconButton icon={icons.back} containerStyle={styles.backButton}
                                         iconStyle={styles.backButtonIcon} onPress={() => navigation.goBack()} />}
              rightComponent={<CartQuantityButton quantity={3} />}
      />
    );
  }
    function renderCartList() {
      return (
        <SwipeListView
          data={myCartList}
          keyExtractor={item => `${item.id}`}
          contentContainerStyle={styles.cartListContainer}
          disableRightSwipe={true}
          rightOpenValue={-75}
          renderItem={(data, rowMap) => (
            <View style={styles.cartItemContainer}>
              <View style={styles.foodImageContainer}>
                <Image source={data.item.image} resizeMode="contain" style={styles.foodImage} />
              </View>
              <View style={styles.foodInfoContainer}>
                <Text style={styles.foodName}>{data.item.name}</Text>
                <Text style={styles.foodPrice}>${data.item.price}</Text>
              </View>
              {/* Quantity */}
              <StepperInput containerStyle={styles.quantityContainer}
                value={data.item.qty}
                onAdd={() => updateQuantityHandler(data.item.qty + 1, data.item.id)}
                onMinus={() => {
                  if (data.item.qty > 1) {
                    updateQuantityHandler(data.item.qty - 1, data.item.id);
                  }
                }}
              />
            </View>
          )}
          renderHiddenItem={(data, rowMap) => (
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
          subTotal={37.97}
          shippingFee={0.00}
          total={37.97}
          onPress={() => navigation.navigate("MyCard")}
        />
      </View>
    );
  };
  export default MyCart;
