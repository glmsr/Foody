import React, { useEffect, useState } from 'react'
import { View, Text, Image } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {Header, IconButton, FormInput, CardItem, FooterTotal} from '../../components'
import {  icons, dummyData } from '../../constants'
import styles from '../../styles/Checkout.style'

const Checkout = ({ navigation, route }) => {

  const [selectedCard, setSelectedCard] = useState(null)

  useEffect(() => {
    let { selectedCard } = route.params
    setSelectedCard(selectedCard)
   }, [])

   function renderHeader() {
    return (
      <Header title="CHECKOUT"
        containerStyle={styles.headerContainer}
        leftComponent={<IconButton icon={icons.back} containerStyle={styles.backButton} iconStyle={styles.backButtonIcon} onPress={() => navigation.goBack()} />}
        rightComponent={<View style={styles.rightHeaderContainer}/>}
      />
    )
   }
  function renderMyCards() {
    return (
      <View>
        {selectedCard && dummyData.myCards.map((item, index) => {
          return (
            <CardItem
              key={`MyCard-${index}`}
              item={item}
              isSelected={`${selectedCard?.key}-${selectedCard?.id}` === `MyCard-${item.id}`}
              onPress={() => setSelectedCard({ ...item, key: "MyCard"})}
            />
          )
        })}
      </View>
    )
  }

  function renderDeliveryAddress() {
    return (
      <View style={styles.deliveryAddressContainer}>
        <Text style={styles.deliveryAddressTitle}>Delivery Address</Text>
        <View style={styles.deliveryAddressDescriptionContainer}>
          <Image source={icons.location} style={styles.deliveryAddressIcon} />
          <Text style={styles.deliveryAddressDescription}>{dummyData?.myProfile?.address}</Text>
        </View>
      </View>
    )
  }

  function renderCoupon() {
    return (
      <View style={styles.couponContainer}>
        <Text style={styles.couponTitle}>Add a Coupon</Text>
        <FormInput inputContainerStyle={styles.couponInputContainer}
                   placeholder="Enter your coupon code"
                   appendComponent={
            <View style={styles.couponButtonContainer}>
              <Image source={icons.discount} style={styles.couponButtonIcon} />
            </View>
           }
        />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      {renderHeader()}
      <KeyboardAwareScrollView keyboardDismissMode="on-drag" extraScrollHeight={-200} contentContainerStyle={styles.scrollContainer}>
        {renderMyCards()}
        {renderDeliveryAddress()}
        {renderCoupon()}
      </KeyboardAwareScrollView>
      <FooterTotal
        subTotal={37.97}
        shippingFee={0.00}
        total={37.97}
        onPress={() => navigation.replace("Success")}
      />
    </View>
  )
}

export default Checkout
