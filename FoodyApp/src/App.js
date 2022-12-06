import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { AddCard, Checkout, DeliveryStatus, FoodDetail, ForgotPassword, Home, MainLayout, Map, MyCart, MyCard, OnBoarding, Otp, SignIn, SignUp, Success } from "./screens";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './stores/rootReducer';
import CustomDrawer from "./navigation/CustomDrawer";
const Stack = createNativeStackNavigator();
const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {

  useEffect(() => {
    isUser();
  }, []);

  async function isUser() {
    await auth().onAuthStateChanged(user => {
      if (user) {
        setUserSession(true);
        setLoading(false);
      } else {
        setUserSession(false);
        setLoading(false);
      }
    });
  }
  return (
    <Provider store={store}>
      <NavigationContainer>
        {loading ? <LoadingStack/> : !userSession ? <AuthStack /> : <AppStack />}
      </NavigationContainer>
    </Provider>
  )
}

export default App