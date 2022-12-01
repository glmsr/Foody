import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { AddCard, Checkout, DeliveryStatus, FoodDetail, ForgotPassword, Map, MyCart, MyCard, OnBoarding, Otp, SignIn, SignUp, Success } from "./screens";
import CustomDrawer from "./navigation/CustomDrawer";

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={'OnBoarding'} >
      <Stack.Screen name="OnBoarding" component={OnBoarding}/*Home ile yeri değişti */ />
        <Stack.Screen name="Home" component={MainLayout} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="Otp" component={Otp} />
        <Stack.Screen name="FoodDetail" component={FoodDetail} />
        <Stack.Screen name="Checkout" component={Checkout} />
        <Stack.Screen name="MyCart" component={MyCart} />
        <Stack.Screen name="Success" component={Success} />
        <Stack.Screen name="AddCard" component={AddCard} />
        <Stack.Screen name="MyCard" component={MyCard} />
        <Stack.Screen name="DeliveryStatus" component={DeliveryStatus} />
        <Stack.Screen name="Map" component={Map} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App