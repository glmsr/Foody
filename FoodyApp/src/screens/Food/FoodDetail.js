import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { FONTS, COLORS, SIZES, icons, images, dummyData } from "../../constants";
import { Header, TextButton, IconButton, CartQuantityButton, IconLabel, LineDivider, Rating, StepperInput, } from "../../components";
import styles from "../../styles/FoodDetail.style";

const FoodDetail = ({ navigation }) => {

  const [foodItem, setFoodItem] = React.useState(dummyData.vegBiryani);
  const [selectedSize, setSelectedSize] = React.useState(0);
  const [qty, setQty] = React.useState(1);

  function renderHeader() {
    return (
      <Header title="DETAILS" containerStyle={styles.headerContainer} leftComponent={<IconButton icon={icons.back} containerStyle={styles.backButton} iconStyle={styles.backButtonIcon} onPress={() => navigation.navigate("Home")} />} rightComponent={<CartQuantityButton quantity={3} />} />
    );
  }

  function renderDetails() {
    return (
      <View style={styles.detailsContainer}>
        <View style={styles.foodCardContainer}>
          <View style={styles.caloriesFavouriteContainer}>
            <View style={styles.caloriesContainer}>
              <Image source={icons.calories} style={styles.caloriesIcon} />
              <Text style={styles.caloriesText}>{foodItem?.calories} calories</Text>
            </View>
            <Image source={icons.love} style={{ width: 20, height: 20, tintColor: foodItem?.isFavourite ? COLORS.primary : COLORS.gray }} />
          </View>
          <Image source={foodItem?.image} resizeMode="contain" style={styles.foodImage} />
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.foodNameText}>{foodItem?.name}</Text>
          <Text style={styles.foodDescriptionText}>{foodItem?.description}</Text>
          <View style={styles.ratingDurationContainer}>
            <IconLabel containerStyle={styles.ratingContainer} icon={icons.star} label="4.5" labelStyle={styles.ratingLabel} />
            <IconLabel containerStyle={styles.durationContainer} icon={icons.clock} iconStyle={styles.durationIcon} label="30Mins." />
            <IconLabel containerStyle={styles.shippingContainer} icon={icons.dollar} iconStyle={styles.shippingIcon} label="Free Shipping" />
          </View>
          <View style={styles.sizesContainer}>
            <Text style={styles.sizesText}>Sizes:</Text>
            <View style={styles.sizeButtonsContainer}>
              {dummyData.sizes.map((item, index) => {
                return (
                  <TextButton  key={`Sizes-${index}`} buttonContainerStyle={[styles.sizeButtonContainer, { borderColor: selectedSize == item.id ? COLORS.primary : COLORS.gray2, backgroundColor: selectedSize == item.id ? COLORS.primary : null, }]} label={item.label} labelStyle={{ color: selectedSize == item.id ? COLORS.white : COLORS.gray2, ...FONTS.body2, }} onPress={() => setSelectedSize(item.id)} />
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
        {/* Info */}
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
        <TextButton buttonContainerStyle={styles.addToCartButton} label="Buy Now" label2="$20.00" onPress={() => navigation.navigate("MyCart")} />
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
