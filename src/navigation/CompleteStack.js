import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailScreen from '../screens/DetailScreen';
import MainScreen from '../screens/MainScreen';
import {backgroundColor} from '../constans/theme';

const CompleteStack = createNativeStackNavigator();

const CompleteStackNavigation = props => {
  const {params} = props.route;
  return (
    <CompleteStack.Navigator>
      <CompleteStack.Screen
        name="MainScreen"
        component={MainScreen}
        options={{
          title: 'Anime Catalog',
          headerShown: false,
          headerTransparent: false,
        }}
        initialParams={params}
      />
      <CompleteStack.Screen
        name="DetailScreen"
        options={{
          headerStyle: {
            backgroundColor: backgroundColor,
          },
        }}
        component={DetailScreen}
      />
    </CompleteStack.Navigator>
  );
};

export default CompleteStackNavigation;
