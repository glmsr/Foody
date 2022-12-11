import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { CardItem, Header, IconButton, TextButton } from '../../components'
import { COLORS, FONTS, icons, SIZES, dummyData } from '../../constants'


const MyCard = ({ navigation }) => {

  const [selectedCard, setSelectedCard] = React.useState(null)
  
  function renderHeader() {
    return (
      <Header
        title="MY CARD"
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

        {dummyData.myCards.map((item, index) => {
          return (
            <CardItem
              key={`MyCard-${item.id}`}
              item={item}
              isSelected={`${selectedCard?.key}-${selectedCard?.id}` === `MyCard-${item.id}`}
              onPress={() => setSelectedCard({...item, key: 'MyCard'})}
              
              />
          )
        })}
      


      </View>
    )
  }
  
  
  function renderAddNewCard() {
    return (
      <View
        style={{
          marginTop: SIZES.padding
        }}
      >
        <Text style={{ ...FONTS.h3 }}>Add New Card</Text>
        
        {dummyData.allCards.map((item, index) => { 
          return (
            <CardItem
              key={`NewCard-${item.id}`}
              item={item}
              isSelected={`${selectedCard?.key}-${selectedCard?.id}` === `NewCard-${item.id}`}
              onPress={() => setSelectedCard({...item, key: 'NewCard'})}
              containerStyle={{
                marginTop: SIZES.radius
              }}
            />
          )
        })}
      </View>
    )
  }

  function renderFooter() {
    return (
      <View
        style={{
          paddingTop: SIZES.radius,
          paddingBottom: SIZES.padding,
          paddingHorizontal: SIZES.padding
        }}
      >
        <TextButton
          disabled = {selectedCard == null}
          buttonContainerStyle={{
            height: 60,
            borderRadius: SIZES.radius,
            backgroundColor: selectedCard == null ? COLORS.gray2 : COLORS.primary
          }}
          label={selectedCard?.key == "NewCard" ? "Add New Card" : "Place your Order"}
          onPress={() => {
            if (selectedCard?.key == "NewCard") {
              navigation.navigate("AddCard", { selectedCard : selectedCard })
            } else {
              navigation.navigate("Checkout", { selectedCard : selectedCard })
            }
          }}
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
      {/* Cards */}
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          marginTop: SIZES.radius,
          paddingHorizontal: SIZES.padding,
          paddingBottom: SIZES.radius
        }}
      >
        {/* My Cards */}
        {renderMyCards()}

        {/* Add New Card */}
        {renderAddNewCard()}
      </ScrollView>
      {/* Footer */}

      {renderFooter()}
    </View>
  )
}

export default MyCard