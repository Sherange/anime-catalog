import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailScreen from '../screens/DetailScreen';
import MainScreen from '../screens/MainScreen';
import {backgroundColor} from '../constans/theme';

const AiringStack = createNativeStackNavigator();

const AiringStackNavigation = props => {
  const {params} = props.route;
  return (
    <AiringStack.Navigator>
      <AiringStack.Screen
        name="MainScreen"
        component={MainScreen}
        options={{
          title: 'Anime Catalog',
          headerShown: false,
          headerTransparent: false,
        }}
        initialParams={params}
      />
      <AiringStack.Screen
        name="DetailScreen"
        options={{
          headerStyle: {
            backgroundColor: backgroundColor,
          },
        }}
        component={DetailScreen}
      />
    </AiringStack.Navigator>
  );
};

export default AiringStackNavigation;
