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
import DrawerNavigator from './src/navigation/DrawerNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <DrawerNavigator />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
