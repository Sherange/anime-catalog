import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailScreen from '../screens/DetailScreen';
import MainScreen from '../screens/MainScreen';

const UpcomingStack = createNativeStackNavigator();

const UpcomingStackNavigation = props => {
  const {params} = props.route;
  return (
    <UpcomingStack.Navigator>
      <UpcomingStack.Screen
        name="MainScreen"
        component={MainScreen}
        options={{
          title: 'Anime Catalog',
          headerTransparent: false,
        }}
        initialParams={params}
      />
      <UpcomingStack.Screen name="DetailScreen" component={DetailScreen} />
    </UpcomingStack.Navigator>
  );
};

export default UpcomingStackNavigation;
