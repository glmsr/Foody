import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CustomDrawer } from "./index";
import { AddCard, Checkout, DeliveryStatus, FoodDetail, Map, MyCard, MyCart, Success } from "../screens";

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={CustomDrawer} />
        <Stack.Screen name="FoodDetail" component={FoodDetail} />
        <Stack.Screen name="Checkout" component={Checkout} />
        <Stack.Screen name="MyCart" component={MyCart} />
        <Stack.Screen name="Success" component={Success} />
        <Stack.Screen name="AddCard" component={AddCard} />
        <Stack.Screen name="MyCard" component={MyCard} />
        <Stack.Screen name="DeliveryStatus" component={DeliveryStatus} />
        <Stack.Screen name="Map" component={Map} />
      </Stack.Navigator>
  )
}
export default AppStack;
