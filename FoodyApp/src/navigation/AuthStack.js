import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignIn, SignUp, ForgotPassword, OnBoarding } from "../screens";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name="OnBoarding" component={OnBoarding} />
                <Stack.Screen name="SignIn" component={SignIn} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            </Stack.Navigator>
    )
}
export default AuthStack;
