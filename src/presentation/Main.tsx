import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabNavigator } from './Navigators/BottomTabNavigator';

export const Main = () => {
  return (
    <NavigationContainer>
        <BottomTabNavigator/>
    </NavigationContainer>
  );
};
