import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailScreen from '../screens/DetailScreen';
import MainScreen from '../screens/MainScreen';
import {backgroundColor} from '../constans/theme';

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
          headerShown: false,
          headerTransparent: false,
        }}
        initialParams={params}
      />
      <UpcomingStack.Screen
        name="DetailScreen"
        options={{
          headerStyle: {
            backgroundColor: backgroundColor,
          },
        }}
        component={DetailScreen}
      />
    </UpcomingStack.Navigator>
  );
};

export default UpcomingStackNavigation;
