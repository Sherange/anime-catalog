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
import TabNavigator from './src/navigation/';

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <TabNavigator />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
