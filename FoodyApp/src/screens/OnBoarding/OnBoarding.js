import React from 'react';
import { View, Text, ImageBackground, Image, Animated } from 'react-native';
import {constants, images,FONTS,SIZES,COLORS} from "../../constants";

import {TextButton} from '../../components/';
import styles from '../../styles/OnBoarding.style';

const OnBoarding = (navigation) => {

  const scrollX=React.useRef(new Animated.Value(0)).current;
  const flatListRef=React.useRef()

  const [currentIndex, setCurrentIndex] = React.useState(0)

  const onViewChangeRef=React.useRef(({viewableItems, changed}) =>{
      setCurrentIndex(viewableItems[0].index)
  } )

  const Dots=()=>{

    const dotPosition=Animated.divide(scrollX,SIZES.width)

    return(
      <View style={styles.dot_view} >
      {constants.onboarding_screens.map((item,index) => {

        const dotColor=dotPosition.interpolate({
          inputRange:[index - 1, index, index + 1],
          outputRange:[COLORS.lightOrange, COLORS.primary, COLORS.lightOrange],
          extrapolate:'clamp'
        })

        const dotWidth=dotPosition.interpolate({
          inputRange:[index - 1, index, index + 1],
          outputRange:[10, 30, 10],
          extrapolate:'clamp'
        })

        return(
          <Animated.View 
          key={`dot-${index}`}
          style={{
            borderRadius:5,
            marginHorizontal:6,
            width:dotWidth,
            height:10,
            backgroundColor:dotColor
          }}/>
        )
      })}

      </View>
    )
  }

  function renderHeaderLogo(){
    return(
      <View style={styles.headerLogo_view}>
      <Image source={images.logo_02}
      resizeMode='contain'
      style={styles.logoImage}
       />
      </View>
    )
  }
  function renderFooter(){
    return(
      <View style={styles.renderFooter_view1} >
      {/*Paggination / Dots */}
        <View  style={styles.renderFooter_view2}>
        <Dots style={{}} />

        </View>

      {/*Buttons */}
        {currentIndex < constants.onboarding_screens.length-1 &&
        <View style={styles.buttons_view} >
          
          <TextButton 
           label='Skip'
           buttonContainerStyle={{
                backgroundColor:null,
           }}
           labelStyle={{
            color:COLORS.darkGray2
           }}
           onPress={() => navigation.replace("SignIn")}
          />

          <TextButton 
          label='Next' 
           buttonContainerStyle={{
            height:60,
            width:200,
            borderRadius:SIZES.radius
           }} 
           onPress={() => {
              flatListRef?.current?.scrollToIndex({
                index:currentIndex +1,
                animated:true
              })
           }}
          />

        </View>
        }
        {currentIndex == constants.onboarding_screens.length -1 &&
          <View style={styles.buttonsContainer_view} >
          <TextButton 
          label="Let's Get Started"
          buttonContainerStyle={{
            height:60,
            borderRadius:SIZES.radius
          }}
          onPress={() => navigation.replace("SignIn")}
           />
          

          </View>
        }
      </View>
    )
  }
  return (
    <View style={styles.renderHeaderLogo}>
      {renderHeaderLogo()}
      <Animated.FlatList
        ref={flatListRef}
        horizontal
        pagingEnabled
        data={constants.onboarding_screens}
        scrollEventThrottle={16}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [
            {nativeEvent: {contentOffset: {x: scrollX}}}
          ],
          {useNativeDriver:false}
        )}
        onViewableItemsChanged={onViewChangeRef.current}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({item , index}) =>{
          return(
            <View style={styles.renderHeaderLogo_view1}>
            <View style={styles.renderFooter_view2}>
            <ImageBackground
            source={item.backgroundImage}
            style={{
              flex:1,
              alignItems:'center',
              justifyContent:'flex-end',
              height:index==1 ? "92.5%" : "100%",
              width:"100%"
            }}>
              <Image 
              source={item.bannerImage}
              resizeMode="contain"
              style={styles.renderFooter_Image}
              />
            </ImageBackground>
            </View>
            <View style={styles.renderFooter_view3} >
            <Text style={styles.renderFooter_text1}>
              {item.title}
            </Text>
            <Text style={styles.renderFooter_text2}>
              {item.description}
            </Text>
              
            </View>
            </View>
          )
        }}
      />
      {renderFooter()}
    </View>
  )
}

export default OnBoarding