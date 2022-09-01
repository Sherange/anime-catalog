import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailScreen from '../screens/DetailScreen';
import MainScreen from '../screens/MainScreen';

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
          headerTransparent: false,
        }}
        initialParams={params}
      />
      <AiringStack.Screen name="DetailScreen" component={DetailScreen} />
    </AiringStack.Navigator>
  );
};

export default AiringStackNavigation;
