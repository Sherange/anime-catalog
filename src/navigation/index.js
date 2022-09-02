import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AiringStack from './AiringStack';
import UpcomingStack from './UpcomingStack';
import CompleteStack from './CompleteStack';
import {
  backgroundColor,
  primaryColor,
  secondryTextColor,
} from '../constans/theme';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {backgroundColor: backgroundColor, borderTopWidth: 0},
      }}>
      <Tab.Screen
        name="Airing"
        initialParams={{
          status: 'airing',
        }}
        component={AiringStack}
        options={{
          unmountOnBlur: true,
          headerShown: false,
          tabBarShowLabel: true,
          tabBarActiveTintColor: primaryColor,
          tabBarInactiveTintColor: secondryTextColor,
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons
              name="format-list-bulleted"
              size={30}
              color={focused ? primaryColor : secondryTextColor}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Complete"
        initialParams={{
          status: 'complete',
        }}
        component={CompleteStack}
        options={{
          unmountOnBlur: true,
          headerShown: false,
          tabBarShowLabel: true,
          tabBarActiveTintColor: primaryColor,
          tabBarInactiveTintColor: secondryTextColor,
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons
              name="format-list-bulleted"
              size={30}
              color={focused ? primaryColor : secondryTextColor}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Upcoming"
        initialParams={{
          status: 'upcoming',
        }}
        component={UpcomingStack}
        options={{
          unmountOnBlur: true,
          headerShown: false,
          tabBarShowLabel: true,
          tabBarActiveTintColor: primaryColor,
          tabBarInactiveTintColor: secondryTextColor,
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons
              name="format-list-bulleted"
              size={30}
              color={focused ? primaryColor : secondryTextColor}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
