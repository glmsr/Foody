import React from 'react';
import { Loading } from '../screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const LoadingStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Loading" component={Loading} />
    </Stack.Navigator>
  );
};
export default LoadingStack;

//Loading ekranını stack olarak oluşturduk, animasyon eklersek güzel olur :)
