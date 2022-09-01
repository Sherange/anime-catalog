import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailScreen from '../screens/DetailScreen';
import MainScreen from '../screens/MainScreen';

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
          headerTransparent: false,
        }}
        initialParams={params}
      />
      <CompleteStack.Screen name="DetailScreen" component={DetailScreen} />
    </CompleteStack.Navigator>
  );
};

export default CompleteStackNavigation;
