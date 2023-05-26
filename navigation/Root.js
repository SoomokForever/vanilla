import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from './BottomTabNavigator';
import DrawerNavigator from './DrawerNavigator';

const Nav = createStackNavigator();

const Root = () => (
  <Nav.Navigator screenOptions={{ presentation: "modal", headerShown: false }}>
    <Nav.Screen name="drawer" component={DrawerNavigator} />
    <Nav.Screen name="bottomTab" component={BottomTabNavigator} />
  </Nav.Navigator>
);
export default Root;