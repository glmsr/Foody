import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import auth from '@react-native-firebase/auth';
import thunk from 'redux-thunk';
import rootReducer from './stores/rootReducer';
import {AppStack, AuthStack, LoadingStack} from './navigation';
import FlashMessage from 'react-native-flash-message';
const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {
  const [loading, setLoading] = useState(true);
  const [userSession, setUserSession] = useState(false);

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
      <FlashMessage position="top" />
    </Provider>
  );
};

export default App;
