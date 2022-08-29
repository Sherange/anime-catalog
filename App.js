/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

import {store} from './src/redux/store';
import MainStackNavigation from './src/navigation/MainStack';

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <MainStackNavigation />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
