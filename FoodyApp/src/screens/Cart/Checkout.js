import React from 'react'
import { View, Text, Image } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {Header, IconButton, FormInput, CardItem, FooterTotal} from '../../components'
import { COLORS, FONTS, icons, SIZES, dummyData } from '../../constants'

const Checkout = ({ navigation, route }) => {
  
  const [selectedCard, setSelectedCard] = React.useState(null)

  React.useEffect(() => {
    let { selectedCard } = route.params

    setSelectedCard(selectedCard)
   }, [])

   function renderHeader() {
    return (
      <Header
        title="CHECKOUT"
        containerStyle={{
          height: 50,
          marginHorizontal: SIZES.padding,
          marginTop: 40,
        }}
        leftComponent={
          <IconButton
            icon={icons.back}
            containerStyle={{
              width: 40,
              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 1,
              borderRadius: SIZES.radius,
              borderColor: COLORS.gray2
            }}
            iconStyle={{
              width: 20,
              height: 20,
              tintColor: COLORS.gray2
            }}
            onPress={() => navigation.goBack()}
          />
        }
        rightComponent={
          <View
            style={{
              width: 40
            }}
          >

          </View>
        }
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
              isSelected={`${selectedCard?.key}-${selectedCard?.id}` == `MyCard-${item.id}`}
              onPress={() => setSelectedCard({ ...item, key: "MyCard"})}
            />
          )
        })}
      </View>
    )
  }

  function renderDeliveryAddress() {
    return (
      <View
        style={{
          marginTop: SIZES.padding
        }}
      >
        <Text style={{...FONTS.h3}}>Delivery Address</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: SIZES.radius,
            paddingVertical: SIZES.radius,
            paddingHorizontal: SIZES.padding,
            borderWidth: 2,
            borderRadius: SIZES.radius,
            borderColor: COLORS.lightGray2
          }}
        >
          <Image
            source={icons.location}
            style={{
              width: 40,
              height: 40
            }}
          />
          <Text
            style={{
              marginLeft: SIZES.radius,
              width: "85%",
              ...FONTS.body3
            }}
          >
            {dummyData?.myProfile?.address}
          </Text>
        </View>
      </View>
    )
  }

  function renderCoupon() { 
    return (
      <View
        style={{
          marginTop: SIZES.padding
        }}
      >
        <Text style={{ ...FONTS.h3 }}>Add a Coupon</Text>
        
        <FormInput
          inputContainerStyle={{
            marginTop: 0,
            paddingLeft: SIZES.padding,
            paddingRight: 0,
            borderWidth: 2,
            borderColor: COLORS.lightGray2,
            backgroundColor: COLORS.white,
            overflow: 'hidden'
          }}
          placeholder="Enter your coupon code"
          appendComponent={
            <View
              style={{
                width: 60,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: COLORS.primary,
                position: 'absolute',
                right: 0,
                top: 0,
                bottom: 0,
                borderRadius: SIZES.radius
              }}
            >
              <Image
                source={icons.discount}
                style={{
                  width: 40,
                  height: 40
                 
                }}
              />
            </View>
           }
        />
      </View>
    )
  }


  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white
      }}
    >
      {/* Header */}
      {renderHeader()}
      {/* Body */}
      <KeyboardAwareScrollView
        keyboardDismissMode="on-drag"
        extraScrollHeight={-200}
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: SIZES.padding,
          paddingBottom: 20
        }}
      >
        {/* My Cards */}
        {renderMyCards()}
        {/* Delivery Address */}
        {renderDeliveryAddress()}
        {/* Coupon */}
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