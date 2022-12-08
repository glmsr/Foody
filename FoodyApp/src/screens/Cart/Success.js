import React from 'react'
import { View, Text, Image, BackHandler } from 'react-native'
import { TextButton } from '../../components'
import { COLORS, FONTS, icons, images, SIZES, dummyData } from '../../constants'
const Success = ({ navigation }) => {
  

  React.useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      return true
    })

    return () => backHandler.remove()
  }, [])


  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: SIZES.padding,
        backgroundColor: COLORS.white
      }}
    >
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Image
          source={images.success}
          resizeMode="contain"
          style={{
            width: 150,
            height: 150
          }}
        />
        <Text style={{ ...FONTS.h1, marginTop: SIZES.padding }}>Successfully ordered!</Text>
        <Text style={{ ...FONTS.body3, marginTop: SIZES.base, textAlign: 'center', color: COLORS.darkGray }}>Thank you for shopping with us. Your delivery will arrive shortly.</Text>

        
      </View>
        <TextButton
          label="Done"
          buttonContainerStyle={{
            height: 55,
            marginBottom: SIZES.padding,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.primary
          }}
          onPress={() => navigation.navigate('DeliveryStatus')}

        />
    </View>
  )
}

export default Success