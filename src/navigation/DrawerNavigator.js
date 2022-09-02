import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import FavouriteScreen from '../screens/FavouriteScreen/';
import TabNavigator from '../navigation/TabNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{}}>
      <Drawer.Screen
        name="Home"
        options={{
          headerShown: false,
        }}
        component={TabNavigator}
      />
      <Drawer.Screen name="Favourite" component={FavouriteScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
