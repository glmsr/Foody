import React from 'react';
import { View, Text, Image, ScrollView} from 'react-native';

import {FONTS, COLORS, SIZES, icons, images, dummyData} from '../../constants';
import {Header, TextButton, IconButton, CardQuantityButton, IconLabel} from '../../components'


const FoodDetail = () => {

  const [foodItem, setFoodItem]= React.useState(dummyData.vegBiryani)
  const[selectedSize, setSelectedSize]= React.useState(0)

  function renderHeader(){
    return(
      <Header 
        title="DETAILS"
        containerStyle={{
          height:50,
          marginHorizontal:SIZES.padding,
          marginTop:40
        }}
        leftComponent={
          <IconButton
            icon={icons.back}
            containerStyle={{
              width:40,
              height:40,
              justifyContent:'center',
              alignItems:'center',
              borderWidth:1,
              borderRadius:SIZES.radius,
              borderColor:COLORS.gray2
            }}
            iconStyle={{
              width:20,
              height:20,
              tintColor:COLORS.gray2
            }}
            onPress={() => console.log("Back") }
          />
        }
        rightComponent={
          <CardQuantityButton 
          quantity={3} />
        }
       />
    );
  }
  function renderDetails(){
    return(
      <View style={{
        marginTop:SIZES.radius,
        marginBottom:SIZES.padding,
        paddingHorizontal:SIZES.padding
      }} >
        {/*Food Card Section */}
          <View style={{
            height:190,
            borderRadius:15,
            backgroundColor:COLORS.lightGray2
          }} >
          {/*Calories && Favourite */}
          <View style={{
            flexDirection:'row',
            justifyContent:'space-between',
            marginTop:SIZES.base,
            paddingHorizontal:SIZES.radius
          }} >
            {/*Calories */}
            <View style={{
              flexDirection:'row',
            }} >
            <Image source={icons.calories} style={{
              width:30,
              height:30,
            }} />
            <Text  style={{
              color:COLORS.darkGray2,
              ...FONTS.body4
            }}>
              {foodItem?.calories} calories
            </Text>
            </View>

            {/*Favourite */}
            <Image source={icons.love} style={{
              width:20,
              height:20,
              tintColor: foodItem?.isFavourite?COLORS.primary:COLORS.gray
            }} />
          </View>
            {/*Food Image */}
            <Image source={foodItem?.image} 
              resizeMode='contain'
              style={{
                height:170,
                width:"100%",

              }}
            />
          </View>
          {/*Food İnfo */}
          <View style={{
            marginTop:SIZES.padding
          }} >
          {/*NAme & Description */}
          <Text style={{...FONTS.h1}} >
            {foodItem?.name}
          </Text>
          <Text style={{
            marginTop:SIZES.base,
            color:COLORS.darkGray,
            textAlign:'justify',
            ...FONTS.body3
          }} >
            {foodItem?.description}
          </Text>
          {/*Ratings, Duration & Shipping */}
          <View style={{
            flexDirection:'row',
            marginTop:SIZES.padding
          }} >
          {/*Rating */}
          <IconLabel 
            containerStyle={{
              backgroundColor: COLORS.primary
            }} 
            icon={icons.star}
            label="4.5"
            labelStyle={{
              color:COLORS.white
            }}
          />

          {/*Duration */}
          <IconLabel 
            containerStyle={{
              marginLeft:SIZES.radius,
              paddingHorizontal:0
            }} 
            icon={icons.clock}
            iconStyle={{
              tintColor:COLORS.black
            }}
            label="30Mins."
            
          />

          {/*Shipping */}
          <IconLabel 
            containerStyle={{
              marginLeft:SIZES.radius,
              paddingHorizontal:0
            }} 
            icon={icons.dollar}
            iconStyle={{
              tintColor:COLORS.black
            }}
            label="Free Shipping"
            
          />

          </View>
          {/*Sizes */}
          <View style={{
            flexDirection:'row',
            marginTop:SIZES.padding,
            alignItems:'center',
          }} >
            <Text style={{...FONTS.h3}} >
                Sizes:
            </Text>
            <View style={{
              flexDirection:'row',
              flexWrap:'wrap',
              marginLeft:SIZES.padding,
            }} >
              {dummyData.sizes.map((item, index) => {
                return(
                    <TextButton 
                    key={`Sizes-${index}`}
                    buttonContainerStyle={{
                      width:55,
                      height:55,
                      margin:SIZES.base,
                      borderWidth:1,
                      borderRadius:SIZES.radius,
                      borderColor:selectedSize == item.id ? COLORS.primary: COLORS.gray2,
                      backgroundColor: selectedSize == item.id ? COLORS.primary: null
                    }}
                    label={item.label}
                    labelStyle={{
                        color:selectedSize == item.id ? COLORS.white : COLORS.gray2,
                        ...FONTS.body2
                    }}
                    onPress={() => setSelectedSize(item.id)}
                    />
                );
              })}

            </View>
          </View>

          </View>
      </View>
    )
  }
  return (
    <View style={{
      flex:1,
      backgroundColor:COLORS.white
    }} >
      {/*Header Section */}
      {renderHeader()}


      {/*Body Section */}
      <ScrollView>
        {/*Food Details*/}
        {renderDetails()}

        {/*Restaurant*/}
      </ScrollView>


      {/*Footer Section */}
    </View>
  )
}

export default FoodDetail