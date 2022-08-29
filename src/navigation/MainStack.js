import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailScreen from '../screens/DetailScreen';
import MainScreen from '../screens/MainScreen';

const MainStack = createNativeStackNavigator();

const MainStackNavigation = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="MainScreen"
        component={MainScreen}
        options={{
          // headerShown: false,
          title: 'Anime Catalog',
          headerTransparent: false,
        }}
      />
      <MainStack.Screen
        name="DetailScreen"
        component={DetailScreen}
        // options={{
        //   title: '',
        //   headerTransparent: true,
        // }}
      />
    </MainStack.Navigator>
  );
};

export default MainStackNavigation;
