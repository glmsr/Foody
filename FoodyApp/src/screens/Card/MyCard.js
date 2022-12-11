import React, { useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { CardItem, Header, IconButton, TextButton } from '../../components'
import { COLORS, icons, SIZES, dummyData } from '../../constants'
import styles from '../../styles/MyCard.style'
const MyCard = ({ navigation }) => {

  const [selectedCard, setSelectedCard] = useState(null)

  function renderHeader() {
    return (
      <Header title="MY CARD" containerStyle={styles.headerContainer}
        leftComponent={<IconButton icon={icons.back} containerStyle={styles.backButton} iconStyle={styles.backButtonIcon} onPress={() => navigation.goBack()} />}
        rightComponent={<View style={styles.rightHeaderContainer}/>}
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
      <View style={styles.addNewCardContainer}>
        <Text style={styles.addNewCardText}>Add New Card</Text>
        {dummyData.allCards.map((item, index) => {
          return (
            <CardItem
              key={`NewCard-${item.id}`}
              item={item}
              isSelected={`${selectedCard?.key}-${selectedCard?.id}` === `NewCard-${item.id}`}
              onPress={() => setSelectedCard({...item, key: 'NewCard'})}
              containerStyle={styles.addNewCardItemContainer}
            />
          )
        })}
      </View>
    )
  }

  function renderFooter() {
    return (
      <View style={styles.footerContainer}>
        <TextButton
          disabled = {selectedCard == null}
          buttonContainerStyle={{ height: 60, borderRadius: SIZES.radius, backgroundColor: selectedCard == null ? COLORS.gray2 : COLORS.primary }}
          label={selectedCard?.key === "NewCard" ? "Add New Card" : "Place your Order"}
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
    <View style={styles.container}>
      {renderHeader()}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {renderMyCards()}
        {renderAddNewCard()}
      </ScrollView>
      {renderFooter()}
    </View>
  )
}

export default MyCard
