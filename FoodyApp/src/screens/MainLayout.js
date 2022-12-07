import React from 'react'
import { View, TouchableOpacity, Image, FlatList } from 'react-native'
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated'
import LinearGradient from 'react-native-linear-gradient'
import { connect } from 'react-redux'
import { setSelectedTab } from '../stores/tab/tabActions'
import { Home,  Search,  CartTab,  Favourite,  Notification } from '../screens'
import { Header, TabButton } from '../components'
import {COLORS, SIZES, icons, constants, dummyData } from '../constants'
import styles from '../styles/MainLayout.style'

const MainLayout = ({ drawerAnimationStyle, navigation, selectedTab, setSelectedTab }) => {

  const flatListRef = React.useRef()
  //Reanimated shared value
  const homeTabFlex = useSharedValue(1)
  const homeTabColor = useSharedValue(COLORS.white)
  const searchTabFlex = useSharedValue(1)
  const searchTabColor = useSharedValue(COLORS.white)
  const cartTabFlex = useSharedValue(1)
  const cartTabColor = useSharedValue(COLORS.white)
  const favouriteTabFlex = useSharedValue(1)
  const favouriteTabColor = useSharedValue(COLORS.white)
  const notificationTabFlex = useSharedValue(1)
  const notificationTabColor = useSharedValue(COLORS.white)

  //Reanimated animated style

  const homeFlexStyle = useAnimatedStyle(() => {
    return {  flex: homeTabFlex.value }
  })

  const homeColorStyle = useAnimatedStyle(() => {
    return { backgroundColor: homeTabColor.value }
  })
  const searchFlexStyle = useAnimatedStyle(() => {
    return { flex: searchTabFlex.value }
  })

  const searchColorStyle = useAnimatedStyle(() => {
    return {backgroundColor: searchTabColor.value }
  })
  const cartFlexStyle = useAnimatedStyle(() => {
    return {flex: cartTabFlex.value }
  })

  const cartColorStyle = useAnimatedStyle(() => {
    return { backgroundColor: cartTabColor.value }
  })

  const favouriteFlexStyle = useAnimatedStyle(() => {
    return { flex: favouriteTabFlex.value }
  })

  const favouriteColorStyle = useAnimatedStyle(() => {
    return { backgroundColor: favouriteTabColor.value }
  })

  const notificationFlexStyle = useAnimatedStyle(() => {
    return {flex: notificationTabFlex.value }
  })

  const notificationColorStyle = useAnimatedStyle(() => {
    return { backgroundColor: notificationTabColor.value }
  })

  React.useEffect(() => {
 setSelectedTab(constants.screens.home)
  }, [])

  React.useEffect(() => {
    if (selectedTab === constants.screens.home) {
      flatListRef?.current?.scrollToIndex({
        index: 0,
        animated: false
      })
      homeTabFlex.value = withTiming(4, { duration: 500 })
      homeTabColor.value = withTiming(COLORS.primary, { duration: 500 })
    } else {
      homeTabFlex.value = withTiming(1, { duration: 500 })
      homeTabColor.value = withTiming(COLORS.white, { duration: 500 })
    }

    if (selectedTab === constants.screens.search) {
      flatListRef?.current?.scrollToIndex({
        index: 1,
        animated: false
      })
      searchTabFlex.value = withTiming(4, { duration: 500 })
      searchTabColor.value = withTiming(COLORS.primary, { duration: 500 })
    } else {
      searchTabFlex.value = withTiming(1, { duration: 500 })
      searchTabColor.value = withTiming(COLORS.white, { duration: 500 })
    }

    if (selectedTab === constants.screens.cart) {
      flatListRef?.current?.scrollToIndex({
        index: 2,
        animated: false
      })
      cartTabFlex.value = withTiming(4, { duration: 500 })
      cartTabColor.value = withTiming(COLORS.primary, { duration: 500 })
    } else {
      cartTabFlex.value = withTiming(1, { duration: 500 })
      cartTabColor.value = withTiming(COLORS.white, { duration: 500 })
    }

    if (selectedTab === constants.screens.favourite) {
      flatListRef?.current?.scrollToIndex({
        index: 3,
        animated: false
      })
      favouriteTabFlex.value = withTiming(4, { duration: 500 })
      favouriteTabColor.value = withTiming(COLORS.primary, { duration: 500 })
    } else {
      favouriteTabFlex.value = withTiming(1, { duration: 500 })
      favouriteTabColor.value = withTiming(COLORS.white, { duration: 500 })
    }

    if (selectedTab === constants.screens.notification) {
      flatListRef?.current?.scrollToIndex({
        index: 4,
        animated: false
      })
      notificationTabFlex.value = withTiming(4, { duration: 500 })
      notificationTabColor.value = withTiming(COLORS.primary, { duration: 500 })
    } else {
      notificationTabFlex.value = withTiming(1, { duration: 500 })
      notificationTabColor.value = withTiming(COLORS.white, { duration: 500 })
    }
  }, [selectedTab])

  return (
    <Animated.View  style={[styles.container, drawerAnimationStyle]}>
      <Header containerStyle={styles.headerContainer} title={selectedTab.toUpperCase()} leftComponent= {
          <TouchableOpacity style={styles.headerLeft} onPress={() => navigation.openDrawer()}>
            <Image source={icons.menu} />
          </TouchableOpacity>
        } rightComponent={
          <TouchableOpacity style={styles.headerRight}>
            <Image source={dummyData?.myProfile?.profile_image} style={styles.profileImage} />
          </TouchableOpacity>
        }
      />
      <View style={styles.content}>
        <FlatList
          ref={flatListRef}
          horizontal
          scrollEnabled={false}
          pagingEnabled
          snapToAlignment="center"
          snapToInterval={SIZES.width}
          showsHorizontalScrollIndicator={false}
          data={constants.bottom_tabs}
          keyExtractor={item => `${item.id}`}
          renderItem={({ item }) => {
            return (
              <View style={styles.contentContainer}>
                {item.label === constants.screens.home && <Home />}
                {item.label === constants.screens.search && <Search />}
                {item.label === constants.screens.cart && <CartTab />}
                {item.label === constants.screens.favourite && <Favourite />}
                {item.label === constants.screens.notification && <Notification />}
              </View>
            )
          }}
        />
      </View>
      <View  style={styles.footer}>
        <LinearGradient style={styles.shadow} start={{ x: 0, y: 0 }} end={{ x: 0, y: 4 }} colors={[COLORS.transparent, COLORS.lightGray1]} />
        <View style={styles.footerContent}>
          <TabButton
            label={constants.screens.home}
            icon={icons.home}
            isFocused={selectedTab === constants.screens.home}
            outerContainerStyle = {homeFlexStyle}
            innerContainerStyle = {homeColorStyle}
            onPress={() => setSelectedTab(constants.screens.home)}
          />
          <TabButton
            label={constants.screens.search}
            icon={icons.search}
            isFocused={selectedTab === constants.screens.search}
            outerContainerStyle = {searchFlexStyle}
            innerContainerStyle = {searchColorStyle}
            onPress={() => setSelectedTab(constants.screens.search)}
          />
          <TabButton
            label={constants.screens.cart}
            icon={icons.cart}
            isFocused={selectedTab === constants.screens.cart}
            outerContainerStyle = {cartFlexStyle}
            innerContainerStyle = {cartColorStyle}
            onPress={() => setSelectedTab(constants.screens.cart)}
          />
          <TabButton
            label={constants.screens.favourite}
            icon={icons.favourite}
            isFocused={selectedTab === constants.screens.favourite}
            outerContainerStyle = {favouriteFlexStyle}
            innerContainerStyle = {favouriteColorStyle}
            onPress={() => setSelectedTab(constants.screens.favourite)}
          />
          <TabButton
            label={constants.screens.notification}
            icon={icons.notification}
            isFocused={selectedTab === constants.screens.notification}
            outerContainerStyle = {notificationFlexStyle}
            innerContainerStyle = {notificationColorStyle}
            onPress={() => setSelectedTab(constants.screens.notification)}
          />
        </View>
      </View>
    </Animated.View>
  )
}

function mapStateToProps(state) {
  return {
    selectedTab: state.tabReducer.selectedTab
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setSelectedTab: (selectedTab) => { return dispatch(setSelectedTab(selectedTab)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout)
